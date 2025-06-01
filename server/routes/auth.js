import express from "express";
import admin from "../utils/firebase.js";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { idToken } = req.body;
  if (!idToken) {
    return res.status(400).json({ error: "ID token is required" });
  }

  try {
    // Debug log
    console.log('Verifying idToken:', idToken.substring(0, 20) + '...');
    // Verify the ID token with Firebase Admin SDK
    const decoded = await admin.auth().verifyIdToken(idToken);
    const uid = decoded.uid;

    // Check if the user exists in your database
    let user = await User.findOne({ uid });
    if (!user) {
      // If user does not exist, create a new user
      user = await User.create({
        uid: decoded.uid,
        email: decoded.email,
        name: decoded.name || decoded.displayName,
        photoURL: decoded.picture,
        provider: decoded.firebase.sign_in_provider,
        role: "user", // Default
      });
    }

    // Generate a JWT token for your application
    const jwtToken = jwt.sign(
      { uid: user.uid, role: user.role, name: user.name, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token: jwtToken, user: { ...user._doc, _id: undefined } });
  } catch (err) {
    console.error('Firebase verification error:', err);
    res.status(401).json({ error: "Invalid or expired token" });
  }
});

export default router;

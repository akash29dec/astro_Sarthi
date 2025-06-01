import admin from "firebase-admin"
import serviceAccount from "./firebaseServiceAccountKey.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://your-database-name.firebaseio.com" // Replace with your Firebase Realtime Database URL
})

export default admin;
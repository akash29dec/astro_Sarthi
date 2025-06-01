import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import auth from "./routes/auth.js"
import mongoose from "mongoose"
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', auth);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
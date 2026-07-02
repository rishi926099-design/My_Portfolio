// Environment variables load kar rahe hain.
import dotenv from "dotenv";

// Database connection import kar rahe hain.
import connectDB from "./config/db.js";

// app.js se Express app import kar rahe hain.
import app from "./app.js";


// .env file ko load kar rahe hain.
dotenv.config();

// MongoDB connect kar rahe hain.
connectDB();


// Port define kar rahe hain.
const PORT = process.env.PORT || 5000;

// Server start kar rahe hain.
app.listen(PORT, () => {
  console.log(`🚀 Server Running on Port ${PORT}`);
});
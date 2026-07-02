// Express Router ko import kar rahe hain.
import express from "express";

// About controller se getAbout function import kar rahe hain.
import { getAbout } from "../controllers/aboutController.js";

// Router create kar rahe hain.
const router = express.Router();

// About data fetch karne ke liye GET request.
router.get("/", getAbout);

// Router export kar rahe hain.
export default router;
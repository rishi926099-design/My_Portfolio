// Express Router ko import kar rahe hain.
import express from "express";

// Skill controller se getSkills function import kar rahe hain.
import { getSkills } from "../controllers/skillController.js";

// Router create kar rahe hain.
const router = express.Router();

// Saari skills fetch karne ke liye GET request.
router.get("/", getSkills);

// Router export kar rahe hain.
export default router;
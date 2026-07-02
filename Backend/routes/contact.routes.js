// Express Router ko import kar rahe hain.
import express from "express";

// Contact controller se createContact function import kar rahe hain.
import { createContact } from "../controllers/contactController.js";

// Router create kar rahe hain.
const router = express.Router();

// Contact form submit karne ke liye POST request.
router.post("/", createContact);

// Router export kar rahe hain.
export default router;
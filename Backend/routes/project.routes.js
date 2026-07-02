// Express Router ko import kar rahe hain.
import express from "express";

// Project controller ke functions import kar rahe hain.
import {
  getProjects,
  getProjectById,
} from "../controllers/projectController.js";

// Router create kar rahe hain.
const router = express.Router();

// Saare projects fetch karne ke liye GET request.
router.get("/", getProjects);

// Kisi ek project ko ID se fetch karne ke liye GET request.
router.get("/:id", getProjectById);

// Router export kar rahe hain.
export default router;
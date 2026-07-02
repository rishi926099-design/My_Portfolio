import express from "express";
import { getHero, createHero } from "../controllers/heroController.js";

const router = express.Router();

// Hero data fetch
router.get("/", getHero);

// Hero data create
router.post("/", createHero);

export default router;
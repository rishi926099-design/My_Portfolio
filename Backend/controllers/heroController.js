// Hero model ko import kar rahe hain taaki database se Hero data access kar sake.
import Hero from "../models/Hero.js";

// ===========================================
// Hero Data Fetch Controller
// ===========================================
export const getHero = async (req, res) => {
  try {
    // Hero collection se sirf ek document fetch karenge.
    const hero = await Hero.findOne();

    // Agar Hero data database me nahi mila.
    if (!hero) {
      return res.status(404).json({
        success: false,
        message: "Hero data not found",
      });
    }

    // Hero data mil gaya.
    res.status(200).json({
      success: true,
      message: "Hero data fetched successfully",
      data: hero,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// ===========================================
// Hero Data Create Controller
// ===========================================
export const createHero = async (req, res) => {
  try {
    // Request body se Hero document create karenge.
    const hero = await Hero.create(req.body);

    res.status(201).json({
      success: true,
      message: "Hero data created successfully",
      data: hero,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
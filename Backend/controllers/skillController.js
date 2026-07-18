// Skill model ko import kar rahe hain taaki database se Skills data access kar sake.
import Skill from "../models/Skill.js";

// Skills ka data fetch karne ke liye controller function bana rahe hain.
export const getSkills = async (req, res) => {
  // try block me database se data fetch karenge.
  try {
    // Skill collection se saari skills fetch karenge.
    const skills = await Skill.find();

    // Agar koi skill database me nahi mili to 404 response bhejenge.
    if (skills.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No skills found",
      });
    }

    // Agar skills successfully mil gayi to 200 status code ke sath response bhejenge.
    res.status(200).json({
      success: true,
      message: "Skills fetched successfully",
      totalSkills: skills.length,
      data: skills,
    });
  } catch (error) {
    // Agar database ya server me koi error aata hai to catch block execute hoga.
    // Internal server error ka response bhejenge.
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

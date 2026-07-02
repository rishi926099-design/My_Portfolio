// About model ko import kar rahe hain taaki database se About data access kar sake.
import About from "../models/About.js";

// About section ka data fetch karne ke liye controller function bana rahe hain.
export const getAbout = async (req, res) => {

  // try block me database se data fetch karenge.
  try {

    // About collection se sirf ek document fetch karenge.
    const about = await About.findOne();

    // Agar About data database me nahi mila to 404 response bhejenge.
    if (!about) {
      return res.status(404).json({
        success: false,
        message: "About data not found",
      });
    }

    // Agar data successfully mil gaya to 200 status code ke sath response bhejenge.
    res.status(200).json({
      success: true,
      message: "About data fetched successfully",
      data: about,
    });

  }

  // Agar database ya server me koi error aata hai to catch block execute hoga.
  catch (error) {

    // Internal server error ka response bhejenge.
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });

  }
};
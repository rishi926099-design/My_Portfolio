// Contact model ko import kar rahe hain taaki database me data save kar sake.
import Contact from "../models/Contact.js";

// ===========================================================
// @desc    Save Contact Form Data
// @route   POST /api/contact
// @access  Public
// ===========================================================

// Contact form ka data save karne ke liye controller function.
export const createContact = async (req, res) => {

  // try block me database operation likhte hain.
  try {

    // Frontend se bheja gaya data request body se nikal rahe hain.
    const { name, email, subject, message } = req.body;

    // Check kar rahe hain ki saari required fields aayi hain ya nahi.
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // Contact model ka ek naya document create kar rahe hain.
    const newContact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    // Data successfully save hone par success response bhejenge.
    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newContact,
    });

  }

  // Agar koi error aata hai to catch block execute hoga.
  catch (error) {

    // Internal server error ka response bhejenge.
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });

  }
};
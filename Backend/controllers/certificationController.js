import Certification from "../models/Certification.js";

export const getCertifications = async (req, res) => {
  try {
    const certifications = await Certification.find();
    if (certifications.length === 0) {
      return res.status(200).json({
        success: true,
        data: [],
        message: "No certifications found",
      });
    }
    res.status(200).json({
      success: true,
      data: certifications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

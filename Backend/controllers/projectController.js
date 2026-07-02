// Project model ko import kar rahe hain taaki database se project data access kar sake.
import Project from "../models/Project.js";

// ===========================================================
// @desc    Get All Projects
// @route   GET /api/projects
// @access  Public
// ===========================================================

// Sabhi projects fetch karne ke liye controller function.
export const getProjects = async (req, res) => {

  // try block me database operation likhte hain.
  try {

    // Project collection se saare projects fetch karenge.
    const projects = await Project.find();

    // Agar database me koi project nahi mila to 404 response bhejenge.
    if (projects.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No projects found",
      });
    }

    // Agar projects mil gaye to success response bhejenge.
    res.status(200).json({
      success: true,
      message: "Projects fetched successfully",
      totalProjects: projects.length,
      data: projects,
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

// ===========================================================
// @desc    Get Single Project By ID
// @route   GET /api/projects/:id
// @access  Public
// ===========================================================

// Ek specific project ko ID ke basis par fetch karne ke liye controller function.
export const getProjectById = async (req, res) => {

  // try block me database operation likhte hain.
  try {

    // URL se project ki ID nikal rahe hain.
    const { id } = req.params;

    // ID ke basis par project search kar rahe hain.
    const project = await Project.findById(id);

    // Agar project nahi mila to 404 response bhejenge.
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // Agar project mil gaya to success response bhejenge.
    res.status(200).json({
      success: true,
      message: "Project fetched successfully",
      data: project,
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
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    technologies: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],

    image: {
      type: String,
      default: "",
    },

    githubLink: {
      type: String,
      default: "",
    },

    liveDemo: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      enum: ["Full Stack", "Frontend", "Backend", "Mobile", "Other"],
      default: "Full Stack",
    },

    featured: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["Completed", "In Progress"],
      default: "Completed",
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
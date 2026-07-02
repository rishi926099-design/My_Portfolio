import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    education: {
      type: String,
      required: true,
      trim: true,
    },

    experience: {
      type: String,
      default: "Fresher",
      trim: true,
    },

    skills: [
      {
        type: String,
        trim: true,
      },
    ],

    profileImage: {
      type: String,
      default: "",
    },

    dateOfBirth: {
      type: Date,
    },

    nationality: {
      type: String,
      default: "Indian",
      trim: true,
    },

    languages: [
      {
        type: String,
        trim: true,
      },
    ],

    interests: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const About = mongoose.model("About", aboutSchema);

export default About;
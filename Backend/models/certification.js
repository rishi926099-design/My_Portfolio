import mongoose from "mongoose";

const certificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    issuer: {
      type: String,
      required: true,
      trim: true,
    },

    date: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

const Certification = mongoose.model("Certification", certificationSchema);

export default Certification;

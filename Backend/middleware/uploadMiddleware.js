// Multer package ko import kar rahe hain.
import multer from "multer";

// Path module ko import kar rahe hain.
import path from "path";

// Upload folder aur filename configure kar rahe hain.
const storage = multer.diskStorage({

  // Uploaded file kis folder me save hogi.
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  // File ka unique naam generate kar rahe hain.
  filename: (req, file, cb) => {

    // Current timestamp le rahe hain.
    const uniqueName = Date.now() + path.extname(file.originalname);

    // File ko unique naam ke saath save kar rahe hain.
    cb(null, uniqueName);
  },
});

// Sirf image files allow karne ke liye filter bana rahe hain.
const fileFilter = (req, file, cb) => {

  // Allowed image types.
  const allowedTypes = /jpeg|jpg|png|webp/;

  // File extension check kar rahe hain.
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );

  // MIME type check kar rahe hain.
  const mimetype = allowedTypes.test(file.mimetype);

  // Agar image valid hai to upload allow kar do.
  if (extname && mimetype) {
    return cb(null, true);
  }

  // Agar image valid nahi hai to error return karo.
  cb(new Error("Only image files are allowed"));
};

// Multer middleware configure kar rahe hain.
const upload = multer({

  storage,

  fileFilter,

  limits: {
    fileSize: 5 * 1024 * 1024, // Maximum 5MB
  },

});

// Middleware ko export kar rahe hain.
export default upload;
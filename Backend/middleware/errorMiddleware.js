// Error handling middleware function bana rahe hain.
const errorHandler = (err, req, res, next) => {

  // Agar status code 200 hai to usse 500 (Internal Server Error) bana do.
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  // Client ko error response bhej rahe hain.
  res.status(statusCode).json({

    // Batata hai request successful nahi hui.
    success: false,

    // Error ka message bhej rahe hain.
    message: err.message,

    // Development mode me stack trace bhejenge, production me nahi.
    stack: process.env.NODE_ENV === "production" ? null : err.stack,

  });

};

// Middleware ko export kar rahe hain.
export default errorHandler;
// Agar user koi aisa route hit kare jo exist nahi karta,
// to ye middleware execute hoga.
const notFound = (req, res, next) => {

  // 404 status code set kar rahe hain.
  res.status(404);

  // Error object bana kar errorHandler middleware ko bhej rahe hain.
  next(new Error(`Route Not Found - ${req.originalUrl}`));

};

// Middleware ko export kar rahe hain.
export default notFound;
// Express framework ko import kar rahe hain.
import express from "express";

// CORS middleware ko import kar rahe hain.
import cors from "cors";

// Sabhi routes ko import kar rahe hain.
import heroRoutes from "./routes/hero.routes.js";
import aboutRoutes from "./routes/about.routes.js";
import skillRoutes from "./routes/skill.routes.js";
import projectRoutes from "./routes/project.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import certificationRoutes from "./routes/certification.routes.js";
import chatRoutes from "./routes/chat.routes.js";
// Express application create kar rahe hain.
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/hero", heroRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/certifications", certificationRoutes);
app.use("/api/chat", chatRoutes);
// Home Route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// App ko export kar rahe hain.
export default app;

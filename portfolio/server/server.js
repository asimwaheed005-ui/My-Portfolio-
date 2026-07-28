import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chatRoutes.js";

dotenv.config();

const app = express();

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://my-portfolio-58esbgwun-asimwaheed005-uis-projects.vercel.app",
    ],
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "DevAI Portfolio Backend is Running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
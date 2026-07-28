import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chatRoutes.js";

dotenv.config();

const app = express();


// Allow frontend requests
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);


app.use(express.json());


// Chat API
app.use("/api/chat", chatRoutes);


// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "DevAI Portfolio Backend is Running 🚀",
  });
});


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
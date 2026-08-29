import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "../config/database.js";
import authRoutes from "../routes/auth.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Backend funcionando!",
  });
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
};

startServer();

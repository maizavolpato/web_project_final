import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    return res.status(200).json(products);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);

    return res.status(500).json({
      message: "Erro interno do servidor.",
    });
  }
});

export default router;

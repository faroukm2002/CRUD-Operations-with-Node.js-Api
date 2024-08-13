import { query } from "../../../database/dbConnection.js";
import express from "express";
import { addProducts, deleteProducts, getAllProducts, getProductsById, updateProducts } from "./product.controller.js";
const router = express.Router();
const baseUrl="/products"

router.get(baseUrl,getAllProducts );

  router.get(`${baseUrl}/:id`, getProductsById);



  router.post(baseUrl,addProducts );



  router.delete(baseUrl,deleteProducts );

  router.put(baseUrl, updateProducts);

  export default router
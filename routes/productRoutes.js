const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

// return the combined product list for all stores
router.get("/all-products", productController.getAllGroupProducts);

// create a new product record
router.post("/products", productController.createProduct);

// fetch the complete product collection
router.get("/products", productController.getAllProducts);

// fetch one product by its id value
router.get("/products/:id", productController.getProductById);

// modify an existing product using its id
router.put("/products/:id", productController.updateProduct);

// remove a product from the collection
router.delete("/products/:id", productController.deleteProduct);

module.exports = router;
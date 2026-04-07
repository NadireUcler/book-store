const mongoose = require("mongoose");

// defining schema for product
const productDefinition = new mongoose.Schema({
    storeId: {
        type: Number,
        required: true
    },
    storeName: {
        type: String,
        required: true
    },
    productId: {
        type: Number,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

// creating model
const Product = mongoose.model("Product", productDefinition);

module.exports = Product;
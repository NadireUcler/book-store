const Product = require("../models/productModel");

const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));

// Creating products
exports.createProduct = async (req, res) => {
    try {
        const newProduct = new Product({
            storeId: req.body.storeId,
            storeName: req.body.storeName,
            productId: req.body.productId,
            productName: req.body.productName,
            price: req.body.price
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Reading all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Reading one product
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({ productId: req.params.id });

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Updating
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findOneAndUpdate(
            { productId: req.params.id },
            req.body,
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Deleting products
exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findOneAndDelete({
            productId: req.params.id
        });

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Getting all group products
exports.getAllGroupProducts = async (req, res) => {
    try {
        const nadireProducts = await Product.find();

        const joeUrl = "https://joes-store-module.onrender.com/products";
        const hamzahUrl = "";

        let joeProducts = [];
        let hamzahProducts = [];

        // Joe products
        if (joeUrl) {
            try {
                const joeResponse = await fetch(joeUrl);

                if (!joeResponse.ok) {
                    console.log(`Error Joe API: ${joeResponse.status}`);
                } else {
                    joeProducts = await joeResponse.json();
                }
            } catch (error) {
                console.log("Error loading Joe's products:", error.message);
            }
        }

        // Hamzah products
        try {
            const hamzahResponse = await fetch(hamzahUrl);

            if (!hamzahResponse.ok) {
                console.log(`Error Hamzah API: ${hamzahResponse.status}`);
            } else {
                hamzahProducts = await hamzahResponse.json();
            }
        } catch (error) {
            console.log("Error loading Hamzah's products:", error.message);
        }

        const allProducts = [
            ...nadireProducts,
            ...joeProducts,
            ...hamzahProducts
        ];

        res.status(200).json(allProducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
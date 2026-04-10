// bring environment configuration into the app
require("dotenv").config();

// required core libraries
const express = require("express");
const path = require("path");

// initialize database connection
require("./models/db");

// Loading application routes
const productRoutes = require("./routes/productRoutes");

// Creating main application instance
const app = express();

// enable handling of JSON and form submissions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// expose public folder for frontend access
//app.use(express.static(path.join(__dirname, "public")));

// Attaching product-related routes to the app
app.use("/", productRoutes);

// simple test route to confirm server is working
app.get("/", (req, res) => {
    res.send("Book Store service is up and running.");
});

// make app available for server.js and testing
module.exports = app;
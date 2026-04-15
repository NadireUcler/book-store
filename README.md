

# Book Store API – Group 3


This project is a Node.js and Express-based web application developed as part of a team assignment. The objective was to create an e-commerce store module using MongoDB Atlas and integrate multiple team modules into a single system.

Each team member developed their own store independently. In this project, I implemented a Book Store module, while another team member developed a Music Store module. The modules were later integrated using a shared endpoint.

The application supports basic CRUD operations for products, including storing and retrieving data from MongoDB Atlas. Each store contains product data with the following fields: storeId, storeName, productId, productName, and price.

An integration endpoint (/allproducts) was created to combine product data from multiple deployed APIs, simulating a simple microservices architecture.

Live Deployment

Book Store API (Render):
https://book-store-9yxy.onrender.com/products

Testing

Testing was implemented using Supertest. The test verifies that the GET /products endpoint returns a status code of 200 and valid data. The output is formatted as required:

your_email@example.com - getAll to show all product - 200 - PASSED

An automate.js script was created to execute tests sequentially and display clear results in the terminal.

How to Run
Install dependencies:
npm install
Create a .env file with your MongoDB connection string:
MONGO_URI=your_connection_string
Run the application:
npm start
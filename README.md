

# Book Store API – Group 3

This project is a Node.js and Express-based REST API developed to manage book products. It supports full CRUD operations including creating, retrieving, updating, and deleting products, with data stored in MongoDB Atlas. The application also includes an integration endpoint (GET /all-products) that collects and combines product data from different store services, demonstrating a simple microservices-style communication between independent modules.

A lightweight frontend interface is provided to display products from all stores in a unified Group 3 Store Hub, while also allowing users to interact with and test the API directly. Testing is implemented using Jest and Supertest to verify that endpoints return correct responses, and an automate.js script is used to run all test files sequentially for clear and organized output in the terminal.

The project can be run locally by installing dependencies with npm install, setting up environment variables in a .env file, and starting the server using npm run dev. Tests can be executed using npm test or npm run automate. The application is deployed on Render and accessible online.
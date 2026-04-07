const mongoose = require("mongoose");

// loading variables defined in the .env file
require("dotenv").config();

// getting the MongoDB connection string from environment variables
const connectionString = process.env.MONGO_URI;

// initiate connection to MongoDB
mongoose.connect(connectionString);

// triggered when connection is successfully established
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB Atlas successfully");
});

// triggered if any error occurs during connection
mongoose.connection.on("error", (error) => {
    console.log("Error while connecting to MongoDB: " + error);
});

// triggered when the connection is lost
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB connection has been disconnected");
});

// gracefully close the connection when the app is terminated (Ctrl + C)
process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("MongoDB connection closed due to application shutdown");
    process.exit(0);
});

// export mongoose so it can be used in other files
module.exports = mongoose;
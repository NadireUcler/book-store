// Loading environment variables
require("dotenv").config(); 

// Importing express
const app = require("../app"); 

// Using env port
const PORT = process.env.PORT || 3002; 

// Starting the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
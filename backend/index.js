
const express = require("express");
const app = express();

// Middleware 
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Start the server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

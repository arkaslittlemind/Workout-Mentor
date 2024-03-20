require('dotenv').config();

const express = require('express');

// Create express app
const app = express();

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// Routes
app.get('/', (req, res) => {
    res.json({ message: "Welcome to the application." });
})

// Listening for requests
// const port = process.env.PORT || 3000;
app.listen(process.env.PORT, () => {
    console.log("Server is running on port:", process.env.PORT);
})




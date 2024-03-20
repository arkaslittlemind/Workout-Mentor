require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workouts');

// Create express app
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// Routes
app.use('/api/workouts',workoutRoutes);

// Listening for requests
app.listen(process.env.PORT, () => {
    console.log("Server is running on port:", process.env.PORT);
})




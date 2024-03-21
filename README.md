
# Workout Master

Workout Master is a full-stack web application designed to help users track their workouts effectively. Built with React for the frontend, Node.js and Express for the backend, and MongoDB for the database, Workout Master offers a seamless experience for users to manage their fitness routines.

## Features

- **User Authentication:** Secure user authentication system allowing users to sign up, log in, and manage their accounts.
- **Workout Tracking:** Users can create, update, and delete their workouts, including exercises, sets, reps, and weights.

## Technologies Used

- **React:** Frontend development framework for building user interfaces.
- **Node.js:** JavaScript runtime environment for server-side development.
- **Express:** Web application framework for Node.js, providing robust features for building APIs.
- **MongoDB:** NoSQL database for storing workout data efficiently.

## Installation

To run Workout Master locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/arkaslittlemind/MERN-Tracker.git
```

3. Install dependencies for both frontend and backend:

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

4. Set up environment variables:

Create a `.env` file in the `backend` directory and add the following variables:

```
PORT=3001
MONGODB_URI=your_mongodb_uri

```

Replace `your_mongodb_uri` with your MongoDB connection string.

5. Start the development server:

```bash
# Start frontend server
cd ../frontend
npm start

# Start backend server
cd ../backend
npm start
```

6. Access the application in your browser:

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Contributing

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests to help improve Workout Master.



---

© 2024 Workout Master. Built with ❤️ by [Arkadipta Mojumder](https://github.com/arkaslittlemind).

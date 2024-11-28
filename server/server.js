const express = require('express');
const cors = require('cors');
const connectDB = require('./config/mongodb');
require('dotenv').config();

const UserRoutes = require("./routes/UserRoutes");
const ImageRoutes = require("./routes/ImageRoutes")
const PORT = process.env.PORT || 4000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// Routes
app.use('/api/user', UserRoutes);
app.use('/api/image',ImageRoutes)
app.get('/', (req, res) => res.send("API Working"));

// Start Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

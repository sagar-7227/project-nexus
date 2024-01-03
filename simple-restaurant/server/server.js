const express = require('express');
const dotenv = require('dotenv');
const userRoute = require('./routes/userRoute');
const connectDB = require('./config/db');
const path = require("path");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

// calling all apis
app.use('/api/user', userRoute);

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(`Server running on PORT ${PORT}...`)
);
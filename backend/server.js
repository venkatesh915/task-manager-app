const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect DB
connectDB();

// routes
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const formRoute = require("./routes/formRoute");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/form", formRoute);

// Connect to Local MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB Compass Connected");
  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running on port ${process.env.PORT}`);
  });
})
.catch((err) => console.error("❌ DB connection failed:", err));

const express = require("express");
const router = express.Router();
const FormData = require("../models/FormData");

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, date, department, doctor, message } = req.body;
    const newEntry = new FormData({ name, email, phone, date, department, doctor, message });
    await newEntry.save();
    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get all appointments
router.get("/", async (req, res) => {
  try {
    const data = await FormData.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch appointments" });
  }
});


module.exports = router;

const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: String,
  department: String,
  doctor: String,
  message: String,
});

module.exports = mongoose.model("FormData", formSchema);

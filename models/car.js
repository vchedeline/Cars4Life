const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: String,
  make: String,
  model: String,
  exterior: String,
  interior: String,
  year: Number,
  drivetrain: String,
  engine: String,
  img: String,
  price: Number,
});

module.exports = mongoose.model("Car", carSchema);

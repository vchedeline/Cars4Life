const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: String,
  make: String,
  model: String,
  body: [String],
  color: String,
  img: String,
  price: Number,
});

module.exports = mongoose.model("Car", carSchema);

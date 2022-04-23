// const Car = require("../models/cars.js");

module.exports = {
  index,
  new: newCar,
  delete: deleteCar,
  update,
  create,
  edit,
  show,
};

function index(req, res) {
  res.send("I am Index");
}

function newCar(req, res) {
  res.send("I am New");
}

function deleteCar(req, res) {
  res.send("I am Delete");
}

function update(req, res) {
  res.send("I am Update");
}

function create(req, res) {
  res.send("I am Create");
}

function edit(req, res) {
  res.send("I am Edit");
}

function show(req, res) {
  res.send("I am Show");
}

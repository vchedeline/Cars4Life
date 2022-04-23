const Car = require("../models/car.js");
const carSeed = require("../models/carSeed");

module.exports = {
  seed,
  index,
  new: newCar,
  delete: deleteCar,
  update,
  create,
  edit,
  show,
};

async function seed(req, res) {
  await Car.deleteMany({}).catch((err) => res.send(err));
  const cars = await Car.create(carSeed).catch((err) => res.send(err));
  res.redirect("/cars");
}

async function index(req, res) {
  const cars = await Car.find({}).catch((err) => res.send(err));
  res.render("index", { cars });
}

function newCar(req, res) {
  res.render("new");
}

async function deleteCar(req, res) {
  await Car.findOneAndDelete(req.params.id).catch((err) => res.send(err));
  res.redirect("/cars");
}

async function update(req, res) {
  await Car.findByIdAndUpdate(req.params.id, req.body).catch((err) =>
    res.send(err)
  );
  res.redirect(`/cars/${req.params.id}`);
}

async function create(req, res) {
  await Car.create(req.body).catch((err) => res.send(err));
  res.redirect("/products");
}

async function edit(req, res) {
  const car = await Car.findById(req.params.id).catch((err) => res.send(err));
  res.render("edit", { car });
}

async function show(req, res) {
  const car = await Car.findById(req.params.id).catch((err) => res.send(err));
  res.render("show", { car });
}

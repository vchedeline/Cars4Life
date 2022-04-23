require("dotenv").config();
require("./controllers/db");
const express = require("express");
const session = require("express-session");
const methodOverride = require("method-override");
const MongoStore = require("connect-mongo");
const morgan = require("morgan")
const app = express();
const PORT = process.env.PORT || 8008;
const carRoutes = require("./controllers/routes.js");

app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use("/cars", carRoutes)

app.get("/", (req, res) => {
  res.send("I Am ROOT")
})

app.listen(PORT, () => console.log(`Now on Port ${PORT}`));

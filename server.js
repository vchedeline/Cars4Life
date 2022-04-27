require("dotenv").config();
require("./models/connection");
const express = require("express");
// const session = require("express-session");
const methodOverride = require("method-override");
// const MongoStore = require("connect-mongo");
// const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT || 8008;
const carRoutes = require("./controllers/CarCtrls");
const carMain = require("./controllers/main");

// app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use("/cars", carRoutes);
app.set("view engine", "ejs");

app.get("/", carMain);

app.listen(PORT, () => console.log(`Now on Port ${PORT}`));

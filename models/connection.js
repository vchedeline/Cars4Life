const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on("error", (err) => console.log(err.message + " MongoDB Err?"));
db.on("connected", () => console.log("MongoDB connected"));
db.on("disconnected", () => console.log("MongoDB Disconnected"));
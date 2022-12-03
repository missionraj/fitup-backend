const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

app.use(cors());

// post routes .....
const memberRoutes = require("./routes/Members");

// add routes here
app.get("/", (req, res) => {
  res.send("we are at home");
});
// middleware for posts
app.use(bodyParser.json());
app.use("/members", memberRoutes);
// add routes here

// db config
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });
const db = mongoose.connection;
db.once("open", (_) => {
  console.log("Database connected:", process.env.DB_CONNECTION);
});

db.on("error", (err) => {
  console.error("connection error:", err);
});

// start listening
app.listen(8000);

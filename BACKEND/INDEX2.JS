const express = require("express");
const app = express();
const mongoose = require("mongoose");
const formdata = require("./Contact");
const port = 4000;
const cors = require("cors");
app.use(cors());

var bodyParser = require("body-parser");
// var jsonParser
app.use(bodyParser.json());
mongoose.connect("mongodb://127.0.0.1:27017/taimoor", {
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => {
  console.log("Database connected");
});
app.post("/create", (req, res) => {
  let user = formdata(req.body);
  user
    .save()
    .then((used) => {
      res.send(used);
    })
    .catch((err) => {
      console.log("api failed");
    });
});
app.listen(port, () => {
  console.log("port is connected");
});

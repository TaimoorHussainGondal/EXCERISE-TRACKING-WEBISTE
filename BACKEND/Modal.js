const mongoose = require("mongoose");

const createscheme = new mongoose.Schema({
  name: {
    type: String,
  },
  activity: {
    type: String,
  },
  time: {
    type: String,
  },
  date: {
    type: String,
  },
  carlories: {
    type: String,
  },
});
const user = mongoose.model("students", createscheme);
module.exports = user;

const mongoose = require("mongoose");

const createscheme = new mongoose.Schema({
  first: {
    type: String,
    required: true,
  },
  sir: {
    type: String,
  },

  email: {
    type: String,
  },
  des: {
    type: String,
  },
});
const user = mongoose.model("contact", createscheme);
module.exports = user;

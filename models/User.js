const mongoose = require("mongoose");

const User = mongoose.model("users", {
  firstname: {
    type: String,
    required: true,
    minlength: 4,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    minlength: 4,
    trim: true
  },
  isActive: {
    type: number,
    default: 0
  }
});
module.exports = { User };

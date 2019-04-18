const mongoose = require("mongoose");

const User = mongoose.model("users", {
  firstName: {
    //Validation
    type: String,
    required: true,
    minlength: 4,
    trim: true
  },
  lastName: {
    //validation
    type: String,
    required: true,
    minlength: 4,
    trim: true
  },
  middleName: {
    //validation
    type: String,
    required: true,
    minlength: 4,
    trim: true
  },
  isActive: {
    //valiidation
    type: Number,
    default: 0
  }
});
module.exports = User;

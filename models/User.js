const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
//Tell mongoose that is a model and that model is users
//("users", UserSchema) we tell listen this model here users is going to be right here in UserSchema
module.exports = mongoose.model("users", UserSchema);

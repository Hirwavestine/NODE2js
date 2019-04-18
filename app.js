const mongoose = require("mongoose");

const User = require("./models/User");

//mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/mongoose", {
  useNewUrlParser: true
});

mongoose.connection
  .once("open", () => console.log("CONNECTED"))
  .on("error", err => {
    console.log(`could not connect`, err);
  });

const newUser = new User({
  firstName: "Berwa",
  lastName: "Amaris",
  middleName: "Davinah"
});

newUser.save(function(err, dataSaved) {
  if (err) return console.log(err);
  console.log(dataSaved);
});

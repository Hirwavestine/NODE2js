const mongoose = require("mongoose");

const User = require("./models/User");
const express = require("express");
const app = express();

//mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/mongoose", {
  useNewUrlParser: true
});

mongoose.connection
  .once("open", () => console.log("CONNECTED"))
  .on("error", err => {
    console.log(`could not connect`, err);
  });
app.post("/users");

// const newUser = new User({
//   firstName: "Berwa",
//   lastName: "Amaris",
//   middleName: "Davinah"
// });

// newUser.save(function(err, dataSaved) {
//   if (err) return console.log(err);
//   console.log(dataSaved);
// });

//process.env.PORT we were saying either use a port that we have available in the environment whatever
//environment that is or use our local environment or local port
const port = 4444 || process.env.PORT;
app.listen(port, () => {
  console.log(`Our server is listening on ${port}`);
});

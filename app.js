const mongoose = require("mongoose");

const User = require("./models/User");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//this allows to send json data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/mongoose", {
  useNewUrlParser: true
});

mongoose.connection
  .once("open", () => console.log("CONNECTED"))
  .on("error", err => {
    console.log(`could not connect`, err);
  });
//create routes
app.get("/", (req, res) => {
  res.send("ROOT");
});

//create a route that is going to take a post request and is going to take a post request going to users
app.post("/users", (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    middleName: req.body.middleName,
    isActive: req.body.isActive
  });

  //then is like execute
  newUser
    .save()
    .then(savedUser => {
      //console.log("saved user");
      res.send("USER SAVED BY ME");
    })
    .catch(err => {
      res.status(404).send("USER NOT SAVED BECAUSE ......");
    });
});

//process.env.PORT we were saying either use a port that we have available in the environment whatever
//environment that is or use our local environment or local port
const port = 4444 || process.env.PORT;
app.listen(port, () => {
  console.log(`Our server is listening on ${port}`);
});

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
//Fecthing Data
app.get("/users", (req, res) => {
  User.find({}).then(users => {
    res.status(200).send(users);
  });
});

//PATCH or PUT
//#nce btn PATCH and PUT
//PUT when you put something you need to specify all the fields that you have in your model with Mongols.
//every time you send a put request you need to replace all the data
//PATCH , when you do patch you can just say listen I just want to patch the first name.
//so when you want to patch something just send the data that you want to patch.

// app.patch("/users/:id", (req, res) => {
//   const id = req.params.id;
//   const firstName = req.body.firstName;

//   User.findByIdAndUpdate(id, { $set: { firstName: firstName } }, { new: true })
//   .then(savedUser => {
//     res.send("USER SAVED BY PATCH AGAIN");
//   });
// });

// app.put("/users/:id", (req, res) => {
//   const id = req.params.id;
//   const firstName = req.body.firstName;
//   const lastName = req.body.lastName;
//   const middleName = req.body.middleName;

//   User.findByIdAndUpdate(
//     id,
//     {
//       $set: { firstName: firstName, lastName: lastName, middleName: middleName }
//     },
//     { new: true }
//   ).then(savedUser => {
//     res.send("USER SAVED BY PUT AGAIN");
//   });
// });

app.put("/users/:id", (req, res) => {
  User.findOne({ _id: req.params.id }).then(user => {
    user.firstName = req.body.firstName;
    user.lastName = req.body.firstName;
    user.middleName = req.body.middleName;

    user.save().then(userSaved => {
      res.send(userSaved);
    });
  });
});

//process.env.PORT we were saying either use a port that we have available in the environment whatever
//environment that is or use our local environment or local port
const port = 4444 || process.env.PORT;
app.listen(port, () => {
  console.log(`Our server is listening on ${port}`);
});

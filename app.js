const mongoose = require("mongoose");
const User = require("./models/User");

mongoose.connect("mongodb:localhost:27017/mongoose", { useMongoClient: true });
mongoose.connection
  .once("open", () => console.log("CONNECTED"))
  .on("error", err => {
    console.log(`could not connect`, err);
  });

//const mongoose = require("mongoose");
//mongoose.Promise = global.Promise;
//mongoose
// .connect("mongodb://localhost:27017/animals")
// .then(db => {
//  console.log("MONGO CONNECTED");
// })
//.catch(err => {
//   console.log("Error");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/animals", { useMongoClient: true });
mongoose.connection.once("open", () => console.log("CONNECTED")).on("error"),
  err => {
    console.log(`could not connect`, err);
  };

//const mongoose = require("mongoose");
//mongoose.Promise = global.Promise;
//mongoose
// .connect("mongodb://localhost:27017/animals")
// .then(db => {
//  console.log("MONGO CONNECTED");
// })
//.catch(err => {
//   console.log("Error");
// });

//let MongoClient = require("mongodb").MongoClient;
//MongoClient.connect("mongodb://localhost:27017/animals", function(err, db) {
//  if (err) return err;
// console.log("CONNECTED");
//});

const { MongoClient, ObjectId } = require("mongodb");
MongoClient.connect(
  "mongodb://localhost:27017",
  { useNewUrlParser: true },
  function(err, client) {
    if (err) return err;
    const object = new ObjectId();
    console.log(object);

    console.log("CONNECTED");
    const db = client.db("animals");

    db.collection("mamals")
      .find()
      .toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    //
    //db.collection("mamals").insertOne(
    // {
    //  name: "horse"
    //},
    //(err, result) => {
    // if (err) {
    //  return console.log(err);
    // }
    //console.log("INSERTED");
    /// }
    // );
  }
);

//const mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost:27017/animals", { useMongoClient: true });
//mongoose.connection.once("open", () => console.log("CONNECTED")).on("error"),
// err => {
//    console.log(`could not connect`, err);
// };

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

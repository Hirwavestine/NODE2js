const { MongoClient, ObjectId } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017",
  { useNewUrlParser: true },
  function(err, client) {
    if (err) return err;
    //const object = new ObjectId();
    //console.log(object);

    console.log("CONNECTED");
    const db = client.db("animals");

    //Create Data

    //db.collection('mamals').insertOne({
    //  name:'fish',
    // legs:2
    //}, (err, result)=>{
    // if(err){ return console.lg(err)}
    //
    //
    //console.log('INSERTED');
    //
    //

    //FECTHING (Reading) Data

    //db.collection("mamals")
    // .find()
    //.toArray(function(err, result) {
    //   if (err) throw err;
    //  console.log(result);
    //});

    //Updating
    //const db = client.db("animals");

    db.collection("mamals")
      .findOneAndUpdate(
        {
          _id: new ObjectId("5cb49afd1aa8970d1b7f1899")
        },
        { $set: { name: "updated-2" } }
      )
      //Promises is a way to ensure that our data return to us as a successfull command or was not successful
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
);

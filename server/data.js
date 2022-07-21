const MongoClient = require("mongodb").MongoClient;
const connection_string = "mongodb://localhost:27017";


MongoClient.connect(connection_string, function (err, client) {
    if (err) throw err;
    console.log("connected to mongodb");
  
    const db = client.db("graphqldummy"); //database
    
    db.collection("OurUsers")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result)
      client.close();
    });
   
  });
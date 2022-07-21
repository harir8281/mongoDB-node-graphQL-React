const MongoClient = require("mongodb").MongoClient;
const connection_string = "mongodb://localhost:27017";

MongoClient.connect(connection_string, function (err, client) {
  if (err) throw err;
  console.log("connected to mongodb");

  const db = client.db("USERS"); //database
  const userArray = [
    {
      name: "messi",
      username: "lm10",
      age: 34,
      nationality: "argentina",
    },
    {
      name: "neymer",
      username: "njr10",
      age: 34,
      nationality: "brazil",
    },
  ];

  //users is collection in database
  //update


db.collection("users").deleteOne({ _id :"62d8f2b79d4342cc1be62d0e" }, function (err, res) {
    if (err) throw err;
    console.log("data removed")
    client.close()
  });

});

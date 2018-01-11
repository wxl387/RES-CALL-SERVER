const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/rescallDB",
  {
    useMongoClient: true
  }
);

// const userSeed = [
//   {
//     username: "abc123",
//     password: "Abc12#"
//   } 
// ];

// db.User
//   .register({})
//   .then(() => db.user.collection.insertMany(userSeed))
//   .then(data => {
//     console.log(data.insertedIds.length + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

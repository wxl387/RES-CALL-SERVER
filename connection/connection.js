const mysql = require("mysql");


const connection = mysql.createConnection("mysql://j2vx52cwv4yx86mh:zwlhe8osumudwq2d@l6slz5o3eduzatkw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/b0mqhlbqyn8lcb0z");


// if (process.env.JAWSDB_URL) {
// 	connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
// 	connection = mysql.createConnection({
//   socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  
//   user: "root",
//   password: "root",
//   database: "resCallDB"
//   });
// };

module.exports = connection;


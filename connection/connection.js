const mysql = require("mysql");


const connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  
  user: "root",
  password: "root",
  database: "resCallDB"
  });
};

module.exports = connection;


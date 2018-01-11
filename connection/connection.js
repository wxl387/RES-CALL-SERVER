const mysql = require("mysql");




if (process.env.JAWSDB_URL) {
	const connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	let connection = mysql.createConnection({
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  
  user: "root",
  password: "root",
  database: "resCallDB"
  });
};

module.exports = connection;


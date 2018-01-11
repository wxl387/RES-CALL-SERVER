const mysql = require("mysql");

const connection = mysql.createConnection({
	socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
	user: "root",
	password: "root",
	database: "rescallDB"
});

module.exports = connection;


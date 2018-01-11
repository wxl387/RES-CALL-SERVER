const connection = require("../connection/connection.js");

const register = {
    addUser: function (username, password) {
        return new Promise(function (resolve, reject) {
            connection.query({
                sql: "SELECT username FROM user WHERE username = ?",
                values: [username]
            },
                function (err, res) {
                    if (res.length != 0) {

                        reject("Username already exists");


                    }
                    else {
                        connection.query(
                            "INSERT INTO user set ?",
                            {
                                username: username,
                                password: password
                            },
                            function (err, res) {
                                console.log(res.affectedRows + " user inserted!\n");
                                if (err) throw err;
                            }
                        )
                        resolve("Username has been added");
                    }
                }
            )
        })
    }
}

module.exports = register;
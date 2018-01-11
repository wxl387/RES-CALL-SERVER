const connection = require("../connection/connection.js");

const check = {
    checkUser: function (username, password) {
        return new Promise(function (resolve, reject) {
            connection.query({
                sql: "SELECT username FROM user WHERE username = ?",
                values: [username]
            },
                function (err, res) {
                    if (res.length = 0) {
                        reject ("Username does not exist");
                    }
                    else {
                        connection.query({
                            sql: "SELECT password From user WHERE username = ?",
                            timeout: 20000,
                            values: [username]
                        }, function (err, res) {
                            console.log("input pwd: ", password);
                            console.log("call back: ", res[0].password);
                            if (password != res[0].password) {
                                reject ("password does not match");
                            }
                            else {
                                resolve ("login successfully");
                            }
                            if (err) throw err;
                        }
                        )
                    }
                    if (err) throw err;
                }
            )
        })
    }
}

module.exports = check;
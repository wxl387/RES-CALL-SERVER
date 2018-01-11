const db = require("../models");

module.exports = {
  addUser: function(req, res) {
    db.register
      .addUser(req.body.username, req.body.password)
      .then(function(result) {
        res.json(result);
      })
      .catch(function(result) {
        res.json(result);
      });
      
  },

  checkUser: function(req, res) {
    db.check
      .checkUser(req.body.username, req.body.password)
      .then(function(result) {
        res.json(result);
      })
      .catch(function(result) {
        res.json(result);
      })

  }
}
  


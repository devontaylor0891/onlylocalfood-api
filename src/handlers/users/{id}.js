'use strict';
var connection = require('../../../db');

module.exports = {
  get_users_id: function(req, res) {
    var userId = req.params.id;
    connection.query(
      `SELECT * FROM users
        WHERE id = ${userId}`,
      function (error, results) {
      if (results.length === 0) {
        res.status(404).send({ message: "Product not found"});
        return;
      }
      console.log("results 1", results);
      var user = {
        id: results[0].id,
        firstName: results[0].first_name,
        email: results[0].email,
        creationDate: results[0].registration_date,
      };
      res.status(200).send(user);
    });
  },
};
  
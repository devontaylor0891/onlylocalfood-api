'use strict';
var connection = require('../../../db');

module.exports = {
  get_users_id: function(req, res) {
    var userId = req.params.id;
    connection.query(`
      SELECT u.*, p.id AS producer_id
      FROM users AS u
      LEFT JOIN producers p
        on p.user_id = u.id
        WHERE u.id = ${userId}`,
      function (error, userResult) {
      if (userResult.length === 0) {
        res.status(404).send({ message: "User not found"});
        return;
      }
      console.log("userResult 1", userResult);

      connection.query(`SELECT * FROM orders WHERE user_id = ${userId}`, function (error, ordersResults) {
        var user = userResult.map(function(row) {
          return {
            id: row.id,
            firstName: row.first_name,
            email: row.email,
            registrationDate: row.registration_date,
            role: row.producer_id ? 'producer' : 'consumer',
            orders: ordersResults || [],
          }
        });
        res.status(200).send(user);
      });
    });
  },
};
  
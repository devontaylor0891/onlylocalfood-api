'use strict';
var connection = require('../../db');
var Producer = require('./producers/{id}');

module.exports = {
  get_producers: function(req, res) {
    connection.query(`
    SELECT * FROM producers`, function (error, results) {
      if (results.length === 0) {
        res.status(404).send({ message: "Producers not found"});
        return;
      }
      console.log("results 1:", results);
      var products = results.map(function(row) {
        return {
          producerId: row.id,
          producerName: row.name,
          producerLogo: '/images/product.jpg',
          producerLocation: row.city,
          producerEmail: 'garden@farms.com',
          producerPhone: row.phone_number,
          producerDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      });
      res.status(200).send(products);
    });
  },

  get_producers_id: function(req, res) {
		Producer.get_producers_id(req, res);
  },

  patch_producer_id: function(req, res) {
    console.log(req.params.id);
    var producerId = req.params.id;
    return res.send(201);
  },

  post_producer_id_products: function(req, res) {
    console.log(req.params.id);
    var producerId = req.params.id;
    return res.send(201);
  },

  get_producers_id_old_products: function(req, res) {
    return res.json({});
  },

  get_producer_id_schedules: function(req, res) {
    return res.json({});
  },

  post_producers_id_schedules: function(req, res) {
    return res.send(201);
  },

};

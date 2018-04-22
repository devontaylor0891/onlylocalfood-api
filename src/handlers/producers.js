'use strict';
var _ = require('lodash');
var connection = require('../../db');
var Producer = require('./producers/{id}');

module.exports = {
  get_producers: function(req, res) {
    connection.query(`
      SELECT pd.*,
      u.first_name AS producer_first_name,
      u.email AS producer_email,
      u.registration_date AS producer_registration_date
      FROM producers pd
        LEFT JOIN users u
          on pd.user_id = u.id
      WHERE pd.id = u.id`, function (error, producerResults) {
      if (producerResults.length === 0) {
        res.status(404).send({ message: "Producers not found"});
        return;
      }
      connection.query(`
        SELECT pt.*,
          c.name AS category_name,
          sc.name AS subcategory_name
          FROM products pt
            LEFT JOIN category c
              ON pt.category_id = c.id
            LEFT JOIN subcategory sc
              ON pt.subcategory_id = sc.id`, function (error, productResults) {
                console.log("productResults", productResults);
        const productGroupedBy = _.groupBy(productResults, 'producer_id');
        console.log("productz", productGroupedBy);
        var producers = producerResults.map(function(row) {
          return {
            id: row.id,
            name: row.name,
            location: row.city,
            province: "SK",
            description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            email: row.producer_email,
            logoURL: '/images/product.jpg',
            longitude: row.latitude,
            latitude: row.longitude,
            firstName: row.producer_first_name,
            registrationDate: row.producer_registration_date,
            status: "active",
            products: productGroupedBy[row.id] || [],
          };
        });
        res.status(200).send(producers);
      });
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

'use strict';
var connection = require('../../../db');

module.exports = {
  get_producers_id: function(req, res) {
    var producerId = req.params.id;
    console.log("producerId", producerId);

    connection.query(`SELECT * from producers WHERE id = ${producerId};`, function (error, results) {
      if (results.length === 0) {
        res.status(404).send({ message: "Producer not found"});
        return;
      }
      console.log("results 1", results);
      var producer = {
        id: results[0].id,
        name: results[0].name,
        logo: '/images/product.jpg',
        city: results[0].city,
        email: 'garden@farms.com',
        phone: results[0].phone_number,
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      };
      connection.query(`SELECT * FROM products WHERE producer_id = ${producerId}`, function (error, results) {
        console.log("results 2", results);
        var products = results.map(function(row) {
          return {
            id: row.id,
            name: row.name,
            image: row.image,
            price: row.price,
            unit: row.unit,
            unitsPer: '1',
            description: row.description,
            category: row.category,
            subcategory: row.subcategory_id,
            qtyAvailable: row.quantity_avaliable,
            qtyPending: row.quantity_pending,
            qtySold: row.quantity_completed,
          }
        });
        producer.products = products;

        connection.query(`SELECT * FROM delivery WHERE producer_id = ${producerId}`, function (error, results) {
          console.log("results 3:", results);
          var deliveries = results.map(function(row) {
            return {
              id: row.id,
              type: row.type,
              date: 'October 31',
              location: row.location,
              latitude: row.latitude,
              longitude: row.longitude,
              startTime: row.start_time,
              endTime: row.end_time,
              description: row.details,
              fee: row.delivery_fee,
              feeWaiver: row.fee_waiver_value
            }
          });
          producer.deliveries = deliveries;
          res.status(200).send(producer);
        });
      });
    });
  },
};

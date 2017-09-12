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
        producerId: results[0].id,
        producerName: results[0].name,
        producerLogo: '/images/product.jpg',
        producerLocation: results[0].city,
        producerEmail: 'garden@farms.com',
        producerPhone: results[0].phone_number,
        producerDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      };
      connection.query(`SELECT * FROM products WHERE producer_id = ${producerId}`, function (error, results) {
        console.log("results 2", results);
        var products = results.map(function(row) {
          return {
            productId: row.id,
            productName: row.name,
            productImage: row.image,
            productPrice: row.price,
            productUnit: row.unit,
            productUnitsPer: '1',
            productDescription: row.description,
            productCategory: row.category,
            productSubcategory: row.subcategory_id,
            qtyAvailable: row.quantity_avaliable,
            qtyPending: row.quantity_pending,
            qtySold: row.quantity_completed,
            productStatus: 'active'
          }
        });
        producer.producerProducts = products;

        connection.query(`SELECT * FROM delivery WHERE producer_id = ${producerId}`, function (error, results) {
          console.log("results 3:", results);
          var deliveries = results.map(function(row) {
            return {
              scheduleId: row.id,
              scheduleType: row.type,
              scheduleDate: 'July 3',
              scheduleLocation: row.location,
              scheduleLatitude: row.latitude,
              scheduleLongitude: row.longitude,
              startTime: row.start_time,
              endTime: row.end_time,
              scheduleDescription: row.details,
              scheduleFee: row.delivery_fee,
              scheduleFeeWaiver: row.fee_waiver_value
            }
          });
          producer.producerSchedule = deliveries;
          res.status(200).send(producer);
        });
      });
    });
  },
};

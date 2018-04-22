'use strict';
var connection = require('../../../db');

module.exports = {
  get_producers_id: function(req, res) {
    var producerId = req.params.id;
    console.log("producerId", producerId);

    connection.query(`
      SELECT pd.*,
      u.first_name AS producer_first_name,
      u.email AS producer_email,
      u.registration_date AS producer_registration_date
      FROM producers pd
        LEFT JOIN users u
          on pd.user_id = u.id
      WHERE pd.id = ${producerId};`, function (error, results) {
      if (results.length === 0) {
        res.status(404).send({ message: "Producer not found"});
        return;
      }
      console.log("results 1", results);
      var producer = {
        id: results[0].id,
        name: results[0].name,
        location: results[0].city,
        province: "SK",
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        email: results[0].producer_email,
        logoURL: '/images/product.jpg',
        longitude: results[0].latitude,
        latitude: results[0].longitude,
        firstName: results[0].producer_first_name,
        registrationDate: results[0].producer_registration_date,
        status: "active",
      };
      connection.query(`SELECT * FROM products WHERE producer_id = ${producerId}`, function (error, results) {
        console.log("results 2", results);
        var products = results.map(function(row) {
          return {
            id: row.id,
            name: row.name,
            description: row.description,
            image: row.image,
            pricePerUnit: row.price,
            unit: row.unit,
            unitsPer: '1',
            category: row.category,
            subcategory: row.subcategory_id,
            dateAdded: "2017-12-02T01:00:00.000Z",
            qtyAvailable: row.quantity_avaliable,
            qtyPending: row.quantity_pending,
            qtyAccepted: row.quantity_accepted,
            qtyCompleted: row.quantity_completed,
            isObsolete: false,
            scheduleList: [
              444,
              445,
              789
            ],
          };
        });
        producer.products = products;

        connection.query(`SELECT * FROM delivery WHERE producer_id = ${producerId}`, function (error, results) {
          console.log("results 3:", results);
          var schedule = results.map(function(row) {
            return {
              id: row.id,
              type: row.type,
              description: row.details,
              startDateTime: row.start_time,
              endDateTime: row.end_time,
              hasFee: row.delivery_fee,
              feeWaiver: row.fee_waiver_value,
              latitude: row.latitude,
              longitude: row.longitude,
              city: row.location,
              address: "Hard coded address",
              province: "Hard coded province",
              orderDeadline: "What is this"
            };
          });
          producer.schedule = schedule;
          res.status(200).send(producer);
        });
      });
    });
  },
};

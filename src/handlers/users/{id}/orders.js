'use strict';
var connection = require('../../../../db');


// :TODO


module.exports = {
  get_users_id_orders: function(req, res) {
    var userId = req.params.id;
    console.log("userId", userId);
/*

    connection.query(
      `SELECT o.*,
        pr.id AS product_name,
        d.name AS delivery_name,
        u.id AS user_name
        FROM users u
          LEFT JOIN products pr
            ON u.product_id = pr.id
          LEFT JOIN delivery d
            ON u.delivery_id = d.id
          LEFT JOIN orders o
            ON u.user_id = o.id
        WHERE u.id = ${userId}`,
*/
    connection.query(`
      SELECT u.first_name AS user_first_name,
        u.email AS user_email,
        o.*
        FROM orders o
          LEFT JOIN users u
            ON o.user_id = u.id
        WHERE o.user_id = ${userId}`,
      function (error, results) {
      if (results.length === 0) {
        res.status(404).send({ message: "Order not found"});
        return;
      }
      console.log("results 1", results);
      var userOrders = {
        iD: results.id,
        userId: results.user_id,
        firstName: results.user_first_name,
        userEmail: results.user_email,
        orderStatus: 'pending',
        producerId: 2,
        producerName: 'Garden Farms',
        products: [
          {
            orderQty: 2,
            productId: 1,
            productName: 'Product1',
            productImage: '/images/product.jpg',
            productPrice: '9.99',
            productUnit: 'lb',
            productUnitsPer: '1',
            productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            productCategory: 'Meat',
            productSubcategory: 'Beef',
            qtyAvailable: '15',
            qtyPending: '3',
            qtySold: '55'
          }, {
            orderQty: 2,
            productId: 2,
            productName: 'Product2',
            productImage: '/images/product.jpg',
            productPrice: '9.99',
            productUnit: 'lb',
            productUnitsPer: '1',
            productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            productCategory: 'Meat',
            productSubcategory: 'Beef',
            qtyAvailable: '15',
            qtyPending: '3',
            qtySold: '55'
          }
        ],
        schedule: {
          schedulesId: 1,
          schedulesType: 'Door-to-door Delivery',
          schedulesDate: 'July 3',
          schedulesLocation: 'Moosomin',
          startTime: '12 pm',
          endTime: '2 pm',
          schedulesDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
          DeliveryFee: '10',
          DeliveryFeeWaiver: '45'
        }
      };
      res.status(200).send(userOrders);
    });
  },
};
  
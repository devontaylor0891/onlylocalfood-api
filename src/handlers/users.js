'use strict';
var connection = require('../../db');
var UserById = require('./users/{id}');
var UserByIdOrders = require('./users/{id}/orders');

module.exports = {
  get_users: function(req, res) {
    connection.query(`SELECT * FROM users`, function (error, results) {
      if (results.length === 0) {
        res.status(404).send({ message: "Users not found"});
        return;
      }
      console.log("results 1:", results);
      var users = results.map(function(row) {
        return {
          id: row.id,
          firstName: row.first_name,
          email: row.email,
          creationDate: row.registration_date,
        }
      });
      res.status(200).send(users);
	});
	/*
    return res.json([
      {
    		title: 'Producer Name1',
    		producerName: 'Garden Farms1',
    		image: '/images/product.jpg',
    		location: 'Moosomin',
    		email: 'garden@farms.com',
    		description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    		products: [
    			{
    				id: 1,
    				productName: 'Product1',
    				image: '/images/product.jpg',
    				price: 'XX.xx',
    				unit: 'unit',
    				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    			}, {
    				id: 2,
    				productName: 'Product2',
    				image: '/images/product.jpg',
    				price: 'XX.xx',
    				unit: 'unit',
    				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    			}, {
    				id: 3,
    				productName: 'Product3',
    				image: '/images/product.jpg',
    				price: 'XX.xx',
    				unit: 'unit',
    				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    			}, {
    				id: 4,
    				productName: 'Product4',
    				image: '/images/product.jpg',
    				price: 'XX.xx',
    				unit: 'unit',
    				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    			}, {
    				id: 5,
    				productName: 'Product5',
    				image: '/images/product.jpg',
    				price: 'XX.xx',
    				unit: 'unit',
    				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    			}, {
    				id: 6,
    				productName: 'Product6',
    				image: '/images/product.jpg',
    				price: 'XX.xx',
    				unit: 'unit',
    				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    			}
    		],
    		deliveries: [
    			{
    				id: 1,
    				type: 'Door-to-door Delivery',
    				date: 'July 3',
    				location: 'Moosomin',
    				startTime: '12 pm',
    				endTime: '2 pm',
    				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
    			}, {
    				id: 2,
    				type: 'Off-farm Pickup',
    				date: 'July 5',
    				location: 'Moosomin',
    				startTime: '12 pm',
    				endTime: '2 pm',
    				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
    			}
    		]
    	}, {
    		title: 'Producer Name2',
    		producerName: 'Garden Farms2',
    		image: '/images/product.jpg',
    		location: 'Moosomin',
    		email: 'garden@farms.com',
    		description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    		products: [
    			{
    				id: 1,
    				productName: 'Product1',
    				image: '/images/product.jpg',
    				price: 'XX.xx',
    				unit: 'unit',
    				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    			}, {
    				id: 2,
    				productName: 'Product2',
    				image: '/images/product.jpg',
    				price: 'XX.xx',
    				unit: 'unit',
    				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    			}, {
    				id: 3,
    				productName: 'Product3',
    				image: '/images/product.jpg',
    				price: 'XX.xx',
    				unit: 'unit',
    				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    			}, {
    				id: 4,
    				productName: 'Product4',
    				image: '/images/product.jpg',
    				price: 'XX.xx',
    				unit: 'unit',
    				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    			}, {
    				id: 5,
    				productName: 'Product5',
    				image: '/images/product.jpg',
    				price: 'XX.xx',
    				unit: 'unit',
    				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    			}, {
    				id: 6,
    				productName: 'Product6',
    				image: '/images/product.jpg',
    				price: 'XX.xx',
    				unit: 'unit',
    				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    			}
    		],
    		deliveries: [
    			{
    				id: 1,
    				type: 'Door-to-door Delivery',
    				date: 'July 3',
    				location: 'Moosomin',
    				startTime: '12 pm',
    				endTime: '2 pm',
    				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
    			}, {
    				id: 2,
    				type: 'Off-farm Pickup',
    				date: 'July 5',
    				location: 'Moosomin',
    				startTime: '12 pm',
    				endTime: '2 pm',
    				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
    			}
    		]
    	}
    ]);*/
  },

  post_users: function(req, res) {
    return res.send(201);
  },

  get_users_id: function(req, res) {
    UserById.get_users_id(req, res);
  /*  return res.json({
  		title: 'Producer Name',
  		producerName: 'Garden Farms',
  		image: '/images/product.jpg',
  		location: 'Moosomin',
  		email: 'garden@farms.com',
  		description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  		products: [
  			{
  				id: 1,
  				productName: 'Product1',
  				image: '/images/product.jpg',
  				price: 'XX.xx',
  				unit: 'unit',
  				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  			}, {
  				id: 2,
  				productName: 'Product2',
  				image: '/images/product.jpg',
  				price: 'XX.xx',
  				unit: 'unit',
  				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  			}, {
  				id: 3,
  				productName: 'Product3',
  				image: '/images/product.jpg',
  				price: 'XX.xx',
  				unit: 'unit',
  				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  			}, {
  				id: 4,
  				productName: 'Product4',
  				image: '/images/product.jpg',
  				price: 'XX.xx',
  				unit: 'unit',
  				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  			}, {
  				id: 5,
  				productName: 'Product5',
  				image: '/images/product.jpg',
  				price: 'XX.xx',
  				unit: 'unit',
  				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  			}, {
  				id: 6,
  				productName: 'Product6',
  				image: '/images/product.jpg',
  				price: 'XX.xx',
  				unit: 'unit',
  				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  			}
  		],
  		deliveries: [
  			{
  				id: 1,
  				type: 'Door-to-door Delivery',
  				date: 'July 3',
  				location: 'Moosomin',
  				startTime: '12 pm',
  				endTime: '2 pm',
  				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
  			}, {
  				id: 2,
  				type: 'Off-farm Pickup',
  				date: 'July 5',
  				location: 'Moosomin',
  				startTime: '12 pm',
  				endTime: '2 pm',
  				description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
  			}
  		]
  	});*/
  },

  get_users_id_orders: function(req, res) {
    UserByIdOrders.get_users_id_orders(req, res);
  },

  post_users_id_orders: function(req, res) {
    console.log(req.params.id);
    var userId = req.params.id;
    return res.send(201);
  },

};

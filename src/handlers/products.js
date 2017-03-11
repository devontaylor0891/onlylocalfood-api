'use strict';

module.exports = {
  get_products: function(req, res) {
    return res.json({
  		title: 'Producer Name',
  		producerName: 'Garden Farms',
  		image: '/images/product.jpg',
  		location: 'Moosomin',
  		email: 'garden@farms.com',
  		description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    });
  },

  patch_products_id: function(req, res) {
    return res.send(201);
  },



};

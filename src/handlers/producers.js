'use strict';

module.exports = {
  get_producer_id: function(req, res) {
    console.log(req.params.id);
    var producerId = req.params.id;

    return res.json({
		productId: 1,
		productName: 'Product1',
		productImage: '/images/product.jpg',
		productPrice: '9.99',
		productUnit: 'lb',
		productUnitsPer: 1,
		productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		producerName: 'Garden Farms',
		producerLocation: 'Moosomin',
		schedules: [
			{
			    schedulesId: 1,
			    schedulesType: 'Door-to-door Delivery',
			    schedulesDate: 'July 3',
			    schedulesLocation: 'Moosomin',
			    startTime: '12 pm',
			    endTime: '2 pm',
			    schedulesDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
			    deliveryFee: '10',
			    deliveryFeeWaiver: '45'
			 }, {
			    schedulesId: 2,
			    schedulesType: 'Off-farm Pickup',
			    schedulesDate: 'July 5',
			    schedulesLocation: 'Moosomin',
			    startTime: '12 pm',
			    endTime: '2 pm',
			    schedulesDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
			  	deliveryFee: null,
			  	deliveryFeeWaiver: null
			}
		]
	});
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

  get_producer_id_old_products: function(req, res) {
    return res.json({});
  },

  get_producer_id_schedules: function(req, res) {
    return res.json({});
  },

  post_producer_id_schedules: function(req, res) {
    return res.send(201);
  },

};

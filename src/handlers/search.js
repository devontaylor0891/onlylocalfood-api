'use strict';

module.exports = {
  get_search: function(req, res) {
    console.log(req.params.id);
    var producerId = req.params.id;

    return res.json({
		products: [
			{
				productId: 1,
				productName: 'Product1',
				productImage: '/images/product.jpg',
				productPrice: '9.99',
				productUnit: 'lb',
				productUnitsPer: '1',
				productCategory: 'Meat',
				productSubcategory: 'Beef',
				producerName: 'Garden Farms'
			}, {
				productId: 2,
				productName: 'Product2',
				productImage: '/images/product.jpg',
				productPrice: '9.99',
				productUnit: 'lb',
				productUnitsPer: '1',
				productCategory: 'Meat',
				productSubcategory: 'Pork',
				producerName: 'Somemore Farms'
			}, {
				productId: 3,
				productName: 'Product3',
				productImage: '/images/product.jpg',
				productPrice: '9.99',
				productUnit: 'lb',
				productUnitsPer: '1',
				productCategory: 'Meat',
				productSubcategory: 'Chicken',
				producerName: 'Other Farms'
			}, {
				productId: 4,
				productName: 'Product4',
				productImage: '/images/product.jpg',
				productPrice: '9.99',
				productUnit: 'lb',
				productUnitsPer: '1',
				productCategory: 'Produce',
				productSubcategory: 'Potatoes',
				producerName: 'Garden Farms'
			}, {
				productId: 5,
				productName: 'Product5',
				productImage: '/images/product.jpg',
				productPrice: '9.99',
				productUnit: 'lb',
				productUnitsPer: '1',
				productCategory: 'Produce',
				productSubcategory: 'Carrots',
				producerName: 'Someother Farms'
			}, {
				productId: 6,
				productName: 'Product6',
				productImage: '/images/product.jpg',
				productPrice: '9.99',
				productUnit: 'lb',
				productUnitsPer: '1',
				productCategory: 'Dairy',
				productSubcategory: 'Cheese',
				producerName: 'Other Farms'
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

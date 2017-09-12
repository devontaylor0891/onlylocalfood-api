'use strict';
var Product = require('./products/{id}');

module.exports = {
  get_products: function(req, res) {
    Product.get_products(res, req);
  },

  get_products_id: function(req, res) {
    Product.get_products_id(req, res);
  },

  patch_products_id: function(req, res) {
    console.log(req.params.id);
    var productId = req.params.id;
    return res.send(201);
  },
};

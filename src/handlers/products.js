'use strict';
var connection = require('../../db');
var Product = require('./products/{id}');

module.exports = {
  get_products: function(req, res) {
    connection.query(`
    SELECT pt.*,
      c.name AS category_name,
      sc.name AS subcategory_name
      FROM products pt
        LEFT JOIN category c
          ON pt.category_id = c.id
        LEFT JOIN subcategory sc
          ON pt.subcategory_id = sc.id`, function (error, results) {
      if (results.length === 0) {
        res.status(404).send({ message: "Products not found"});
        return;
      }
      console.log("results 1:", results);
      var products = results.map(function(row) {
        return {
          id: row.id,
          productName: row.name,
          image: row.image,
          price: row.price,
          unit: row.unit,
          unitsPer: '1',
          description: row.description,
          category: results[0].category_name,
          subcategory: results[0].subcategory_name,
          qtyAvailable: row.quantity_avaliable,
          qtyPending: row.pending,
          qtySold: row.completed
        }
      });
      res.status(200).send(products);
    });
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

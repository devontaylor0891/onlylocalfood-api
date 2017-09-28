'use strict';
var connection = require('../../../db');

module.exports = {
  get_products_id: function(req, res) {
    var productId = req.params.id;
    console.log("productId", productId);

    connection.query(
      `SELECT pt.*,
        pd.Name AS producer_name,
        c.name AS category_name,
        sc.name AS subcategory_name
        FROM products pt
          LEFT JOIN producers pd
            ON pt.producer_id = pd.id
          LEFT JOIN category c
            ON pt.category_id = c.id
          LEFT JOIN subcategory sc
            ON pt.subcategory_id = sc.id
        WHERE pt.id = ${productId}`,
      function (error, results) {
      if (results.length === 0) {
        res.status(404).send({ message: "Product not found"});
        return;
      }
      console.log("results 1", results);
      var product = {
        id: results[0].id,
        name: results[0].name,
        image: results[0].image,
        price: results[0].price,
        unit: results[0].unit,
        unitsPer: '3',
        description: results[0].description,
        productCategory: results[0].category_name,
        productSubcategory: results[0].subcategory_name,
        qtyAvailable: results[0].avaliable,
        qtyPending: results[0].pending,
        qtySold: results[0].completed,
        productStatus: 'active',
        producerId: results[0].producer_id,
        producerName: results[0].producer_name,
      };
      res.status(200).send(product);
    });
  },
};
  
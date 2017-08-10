'use strict';
var producerId = require('./producers/{id}');

module.exports = {
  get_producer_id: function(req, res) {
		producerId.get_producer_id(req, res);
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

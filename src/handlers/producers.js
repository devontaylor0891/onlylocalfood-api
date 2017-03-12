'use strict';

module.exports = {
  get_producer_id: function(req, res) {
    console.log(req.params.id);
    var producerId = req.params.id;
    return res.json({});
  },

  patch_producer_id: function(req, res) {
    console.log(req.params.id);
    var producerId = req.params.id;
    return res.send(201);
  },

  get_producer_id_products: function(req, res) {
    console.log(req.params.id);
    var producerId = req.params.id;
    return res.json({});
  },

  post_producer_id_products: function(req, res) {
    console.log(req.params.id);
    var producerId = req.params.id;
    return res.send(201);
  },

  get_producer_id_products_id: function(req, res) {
    return res.json({});
  },

  get_producer_id_products_id_old: function(req, res) {
    return res.json({});
  },

  get_producer_id_schedules: function(req, res) {
    return res.json({});
  },

  post_producer_id_schedules: function(req, res) {
    return res.send(201);
  },

  delete_producer_id_schedules_id: function(req, res) {
    return res.send(202);
  },

  patch_producer_id_schedules_id: function(req, res) {
    return res.send(201);
  },



};

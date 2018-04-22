var users = require('./src/handlers/users');
var producers = require('./src/handlers/producers');
var categories = require('./src/handlers/categories');
var products = require('./src/handlers/products');
var schedules = require('./src/handlers/schedules');
var search = require('./src/handlers/search');
var express = require('express');

var router = express.Router();

router.route('/users').get(users.get_users);
router.route('/users').post(users.post_users);
router.route('/users/:id').get(users.get_users_id);
router.route('/users/:id/orders').get(users.get_users_id_orders);
// BODY: array of products (object with id and qty)
router.route('/users/:id/orders').post(users.post_users_id_orders);

router.route('/producers').get(producers.get_producers);
router.route('/producers/:id').get(producers.get_producers_id); // will have products in it and have schedules
router.route('/producers/:id').patch(producers.patch_producer_id);
router.route('/producers/:id/products').post(producers.post_producer_id_products);
router.route('/producers/:id/old-products').get(producers.get_producers_id_old_products);
router.route('/producers/:id/schedules').post(producers.post_producers_id_schedules);

router.route('/schedules/:id').delete(schedules.delete_schedules_id);
router.route('/schedules/:id').patch(schedules.patch_schedules_id);

router.route('/categories').get(categories.get_categories);

router.route('/products').get(products.get_products);
router.route('/products/:id').get(products.get_products_id); // will have producer's info
router.route('/products/:id').patch(products.patch_products_id);

router.route('/search').get(search.get_search);


module.exports = router;

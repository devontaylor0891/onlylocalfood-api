var users = require('./src/handlers/users');
var producers = require('./src/handlers/producers');
var categories = require('./src/handlers/categories');
var products = require('./src/handlers/products');
var express = require('express');

var router = express.Router();

router.route('/users').get(users.get_users);
router.route('/users').post(users.post_users);
router.route('/users/{id}').get(users.get_users_id);


router.route('/producers/:id').get(producers.get_producer_id);
router.route('/producers/{id}').patch(producers.patch_producer_id);
router.route('/producers/{id}/products').get(producers.get_producer_id_products);
router.route('/producers/{id}/products').post(producers.post_producer_id_products);
router.route('/producers/{id}/products/{id}').get(producers.get_producer_id_products_id);
router.route('/producers/{id}/products/{id}/old').get(producers.get_producer_id_products_id_old);
router.route('/producers/{id}/schedules').get(producers.get_producer_id_schedules);
router.route('/producers/{id}/schedules').post(producers.post_producer_id_schedules);
router.route('/producers/{id}/schedules/{id}').delete(producers.delete_producer_id_schedules_id);
router.route('/producers/{id}/schedules/{id}').patch(producers.patch_producer_id_schedules_id);


router.route('/categories').get(categories.get_categories);


router.route('/products').get(products.get_products);
router.route('/products/{id}').patch(products.patch_products_id);


router.route('/users/{id}/orders').get(users.get_users_id_orders);
router.route('/users/{id}/orders/{id}').get(users.get_users_id_orders_id);
// BODY: array of products (object with id and qty)
router.route('/users/{id}/orders').post(users.post_users_id_orders);


module.exports = router;

var users = require('./src/handlers/users');
var express = require('express');

var router = express.Router();

router.route('/users').get(users.getUsers); //just random routes to test
router.route('/user').post(users.postUsers);

module.exports = router;

const express = require('express');
const UserController = require('./controllers/UserControler');
const AddressController = require('./controllers/AddressController');

const routes = express.Router();

// USERS
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

// ADDRESSES
routes.post('/users/:user_id/address', AddressController.store);

module.exports = routes;

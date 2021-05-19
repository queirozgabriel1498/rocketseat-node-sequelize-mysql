const express = require('express');
const UserController = require('./controllers/UserControler');
const AddressController = require('./controllers/AddressController');

const routes = express.Router();

// USERS
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

// ADDRESSES
routes.get('/users/:user_id/addresses', AddressController.index); // Get one address.
routes.post('/users/:user_id/addresses', AddressController.store); // Post one address.

module.exports = routes;

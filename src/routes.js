const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');

const routes = express.Router();

// Routes to users.
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

// Routes to addresses.
routes.post('/users/:user_id/addresses', AddressController.store);
routes.get('/users/:user_id/addresses', AddressController.index);


module.exports = routes;

const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');
const ReportController = require('./controllers/ReportController');

const routes = express.Router();

// Routes to users.
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

// Routes to addresses.
routes.post('/users/:user_id/addresses', AddressController.store);
routes.get('/users/:user_id/addresses', AddressController.index);

// Routes to techs.
routes.post('/users/:user_id/techs', TechController.store);
routes.get('/techs', TechController.techsFindAll);
routes.get('/users/:user_id/techs', TechController.index);
routes.delete('/users/:user_id/techs', TechController.delete);

// Routes to reports.
routes.get('/reports', ReportController.show);

module.exports = routes;

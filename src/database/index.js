const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');

// Conexão com o banco de dados.
const connection = new Sequelize(dbConfig);

User.init(connection);

module.exports = connection;

const sequelize = require('../config/database');
const User = require('./User');
const Service = require('./Service');

// Relaciones aquí (las definiremos después)

module.exports = {
  sequelize,
  User,
  Service
};
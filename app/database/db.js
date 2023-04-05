const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/database');
const db = {}

db.connection = new Sequelize(config.database, config.username, config.password, config);

// Vinculamos a nuestros modelos a DB
db.Transporte = require('../models/Transporte')(db.connection, DataTypes);
db.Carrier = require('../models/Carrier')(db.connection, DataTypes);
db.Pol = require('../models/Pol')(db.connection, DataTypes);
db.Pod = require('../models/Pod')(db.connection, DataTypes);

// Asociar los modelos
db.Transporte.associate(db);
db.Carrier.associate(db);
db.Pol.associate(db);
db.Pod.associate(db);

module.exports = db;
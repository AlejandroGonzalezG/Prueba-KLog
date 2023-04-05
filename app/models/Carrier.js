'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Transporte, { as: 'carrier', foreignKey: 'carrier_id'})
    }
  }
  Carrier.init({
    short_name: DataTypes.STRING,
    official_name: DataTypes.STRING,
    scac: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Carrier',
    freezeTableName: true,
    timestamps: false
  });
  return Carrier;
};
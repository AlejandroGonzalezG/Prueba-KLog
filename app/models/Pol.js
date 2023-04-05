'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Transporte, { as: 'pol', foreignKey: 'pol_id'})
    }
  }
  Pol.init({
    name: DataTypes.STRING,
    locode: DataTypes.STRING,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Pol',
    freezeTableName: true,
    timestamps: false
  });
  return Pol;
};
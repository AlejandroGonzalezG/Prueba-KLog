'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transporte extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Carrier, {as: 'carrier', foreignKey: 'carrier_id'})
      this.belongsTo(models.Pol, {as: 'pol', foreignKey: 'pol_id'})
      this.belongsTo(models.Pod, {as: 'pod', foreignKey: 'pod_id'})
    }
  }
  Transporte.init({
    carrier_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Carrier',
      }
    },
    pol_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Pol',
      }
    },
    pod_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Pod',
      }
    },
    etd: DataTypes.STRING,
    eta: DataTypes.STRING,
    transit_time: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transporte',
    freezeTableName: true,
    timestamps: false
  });
  return Transporte;
};
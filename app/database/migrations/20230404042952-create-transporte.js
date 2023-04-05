'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transporte', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      carrier_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Carrier'
        }
      },
      pol_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Pol'
        }
      },
      pod_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Pod'
        }
      },
      etd: {
        type: Sequelize.STRING
      },
      eta: {
        type: Sequelize.STRING
      },
      transit_time: {
        type: Sequelize.INTEGER
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transporte');
  }
};
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pol', [
      {
        id: 14500,
        name: 'Valparaiso',
        locode: 'CLVAP',
        longitude: -71.616667,
        latitude: -33.033333,
        // createdAt: new Date(),
        // updatedAt: new Date()
      },{
        id: 59970,
        name: 'Shanghai',
        locode: 'CNSHA',
        longitude: 121.519226,
        latitude: 31.395895,
        // createdAt: new Date(),
        // updatedAt: new Date()
      },{
        id: 59940,
        name: 'Ningbo',
        locode: 'CNNGB',
        longitude: 121.618652,
        latitude: 29.895425,
        // createdAt: new Date(),
        // updatedAt: new Date()
      },
  ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pol', null, {});

  }
};

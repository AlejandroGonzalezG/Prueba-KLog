'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pod', [
      {
        id: 8640,
        name: 'Miami',
        locode: 'USMIA',
        longitude: -80.183333,
        latitude: 25.783333,
        // createdAt: new Date(),
        // updatedAt: new Date()
      },{
        id: 14470,
        name: 'San Antonio',
        locode: 'CLSAI',
        longitude: -71.616667,
        latitude: -33.583333,
        // createdAt: new Date(),
        // updatedAt: new Date()
      },{
        id: 14500,
        name: 'Valparaiso',
        locode: 'CLVAP',
        longitude: -71.616667,
        latitude: -33.033333,
        // createdAt: new Date(),
        // updatedAt: new Date()
      },
  ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pod', null, {});

  }
};

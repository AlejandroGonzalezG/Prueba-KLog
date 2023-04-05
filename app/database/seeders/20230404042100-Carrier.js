'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Carrier', [
      {
        id: 124,
        short_name: 'MSC',
        official_name: 'Mediterranean Shipping Company',
        scac: 'MSCU',
        // createdAt: new Date(),
        // updatedAt: new Date()
      },{
        id: 93,
        short_name: 'Aliança',
        official_name: 'Aliança Navegação e Logística',
        scac: 'ALIU',
        // createdAt: new Date(),
        // updatedAt: new Date()
      },{
        id: 168,
        short_name: 'ONE',
        official_name: 'Ocean Network Express',
        scac: 'ONEY',
        // createdAt: new Date(),
        // updatedAt: new Date()
      },{
        id: 114,
        short_name: 'Hamburg Süd',
        official_name: 'Hamburg Süd',
        scac: 'SUDU',
        // createdAt: new Date(),
        // updatedAt: new Date()
      }
  ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Carrier', null, {});

  }
};

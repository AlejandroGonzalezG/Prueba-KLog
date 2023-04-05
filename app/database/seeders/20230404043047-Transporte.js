'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Transporte', [
    {
      carrier_id: 124,
      pol_id: 14500,
      pod_id: 8640,
      etd: '2023-04-09T10:00+0000',
      eta: '2023-05-24T15:00+0000',
      transit_time: 45,
      // createdAt: new Date(),
      // updatedAt: new Date()
    },{
      carrier_id: 124,
      pol_id: 14500,
      pod_id: 8640,
      etd: '2023-04-16T10:00+0000',
      eta: '2023-06-06T17:00+0000',
      transit_time: 51,
      // createdAt: new Date(),
      // updatedAt: new Date()
    },{
      carrier_id: 93,
      pol_id: 59970,
      pod_id: 14470,
      etd: '2023-04-15T02:30+0000',
      eta: '2023-06-03T03:00+0000',
      transit_time: 49,
      // createdAt: new Date(),
      // updatedAt: new Date()
    },{
      carrier_id: 93,
      pol_id: 59970,
      pod_id: 14470,
      etd: '2023-04-22T02:00+0000',
      eta: '2023-06-11T03:00+0000',
      transit_time: 49,
      // createdAt: new Date(),
      // updatedAt: new Date()
    },{
      carrier_id: 168,
      pol_id: 59940,
      pod_id: 14500,
      etd: '2023-04-08T03:00+0000',
      eta: '2023-05-13T02:00+0000',
      transit_time: 35,
      // createdAt: new Date(),
      // updatedAt: new Date()
    },{
      carrier_id: 114,
      pol_id: 59940,
      pod_id: 14500,
      etd: '2023-04-19T08:00+0000',
      eta: '2023-05-31T19:30+0000',
      transit_time: 42,
      // createdAt: new Date(),
      // updatedAt: new Date()
    },
  ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Transporte', null, {});
  }
};

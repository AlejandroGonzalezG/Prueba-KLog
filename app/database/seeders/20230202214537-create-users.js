'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // Corre cuando se ejecuta el seed
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [
      { name: 'Anton', age: 18 },
      { name: 'Robert', age: 28 },
      { name: 'Daniel', age: 38 },
      { name: 'Ariel', age: 11 },
      { name: 'Pamela', age: 58 },
    ], {});

  },

  // Esto se ejecuta cuando se deshace la siembra
  async down(queryInterface, Sequelize) {

    // Null borra todos los registros, funciona como tipo cláusula WHERE de SQL
    await queryInterface.bulkDelete('users', 
    null, // si queremos borrar por algun parámetro de nuestra tabla, podriamos indicar age: 18, donde borrará los datos con age = 18
     {});

  }
};

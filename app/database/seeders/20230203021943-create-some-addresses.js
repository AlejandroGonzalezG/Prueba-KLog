'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('addresses', [
      { street: 'Calle nueva 1', user_id: 1, createdAt: new Date(), updatedAt: new Date()  },
      { street: 'Calle nueva 2', user_id: 2, createdAt: new Date(), updatedAt: new Date()  },
      { street: 'Calle nueva 3', user_id: 3, createdAt: new Date(), updatedAt: new Date()  },
      { street: 'Calle nueva 4', user_id: 4, createdAt: new Date(), updatedAt: new Date()  },
      { street: 'Calle nueva 5', user_id: 5, createdAt: new Date(), updatedAt: new Date()  }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('addresses', null, {});

  }
};

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        id: '11111111-1111-1111-1111-111111111111',
        name: 'Bob1',
        email: 'bob@gmail.com',
        balance: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '11111111-1111-1111-1111-111111111112',
        name: 'Bob2',
        email: 'bob2@gmail.com',
        balance: 400,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '11111111-1111-1111-1111-111111111113',
        name: 'Bob3',
        email: 'bob3@gmail.com',
        balance: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '11111111-1111-1111-1111-111111111114',
        name: 'Bob4',
        email: 'bob4@gmail.com',
        balance: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

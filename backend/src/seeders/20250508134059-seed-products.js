'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        id: '21111111-1111-1111-1111-111111111111',
        name: 'Laptop',
        price: 1200.00,
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '31111111-1111-1111-1111-111111111111',
        name: 'Headphones',
        price: 150.00,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '41111111-1111-1111-1111-111111111111',
        name: 'Phone',
        price: 1500.00,
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '51111111-1111-1111-1111-111111111111',
        name: 'Mouse',
        price: 250.00,
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};

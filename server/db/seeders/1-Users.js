'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'user1',
        email: 'user1@example.com',
        password: 'password1',
        city: 'Москва',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'user2',
        email: 'user2@example.com',
        password: 'password2',
        city: 'Санкт-Петербург',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};

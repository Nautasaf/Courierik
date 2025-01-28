'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Favorites', [
      {
        userId: 1,
        companyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        companyId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Favorites', null, {});
  },
};

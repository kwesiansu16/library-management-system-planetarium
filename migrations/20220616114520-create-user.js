'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(120),
        allowNull:false
      },
      email: {
        type: Sequelize.STRING(120),
        allowNull:false
      },
      mobile: {
        type: Sequelize.STRING(25),
        allowNull:false
      },
      gender: {
        type: Sequelize.ENUM('male','female')
      },
      address: {
        type: Sequelize.TEXT,
        allowNull:true
      },
      status: {
        type: Sequelize.ENUM('1','0'),
        defaultValue:'1'

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StudentMasters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      mobile_no:{
        type:Sequelize.BIGINT
      },
       age:{
        type:Sequelize.INTEGER
      },
      pincode:{
        type:Sequelize.INTEGER
      },
      city:{
        type:Sequelize.STRING
      },
      aadhar_no:{
        type:Sequelize.BIGINT
      },
      gender:{
        type:Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StudentMasters');
  }
};
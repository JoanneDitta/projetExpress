'use strict';

/** @type {import('sequelize-cli').Migration} */

  module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn("Users", "isBanned", {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.removeColumn("Users", "isBanned");
    }
  };
  

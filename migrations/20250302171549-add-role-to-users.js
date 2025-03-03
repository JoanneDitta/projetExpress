'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Users", "role", {
      type: Sequelize.STRING, // Un rôle sous forme de texte
      allowNull: true,        // ✅ Peut être NULL
      defaultValue: null      // ✅ Par défaut NULL
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users", "role");
  }
};


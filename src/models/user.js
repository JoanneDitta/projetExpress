"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      // Définition des associations ici si nécessaire
    }
  }

  User.init(
    {
      pseudo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Empêche les doublons
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      prenom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Empêche les doublons
        validate: {
          isEmail: true, // Vérifie que c'est un email valide
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};

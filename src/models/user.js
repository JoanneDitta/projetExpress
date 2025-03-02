'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    email: DataTypes.STRING,
    pseudo: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  
  module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      pseudo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Empêche les doublons
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Empêche les doublons
        validate: {
          isEmail: true, // Vérifie que c'est bien un email
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return User;
  };
  
};
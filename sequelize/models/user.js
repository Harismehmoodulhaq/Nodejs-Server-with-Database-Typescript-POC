'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * How to create using CLI
     * npx sequelize-cli model:generate --name User --attributes first_name:string,last_name:string,email:string
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    // id: DataTypes.NUMBER,
    id: DataTypes.INTEGER, // Change it to INTEGER for consistancy
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};



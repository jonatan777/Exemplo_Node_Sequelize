// models/user.js

const DataTypes = require('sequelize');
const Sequelize = require('../config/config.js');


const User = Sequelize.define("User", {
   firstName: {
     type: DataTypes.STRING,
     allowNull: false
   },
   lastName: {
     type: DataTypes.STRING,
     allowNull: false
   },
   email: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

Sequelize.sync().then(() => {
   console.log('User table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});


module.exports = User;
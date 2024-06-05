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
   console.log('Tabela User criada com successo!');
}).catch((error) => {
   console.error('Não foi possivel criar a tabela User : ', error);
});


module.exports = User;
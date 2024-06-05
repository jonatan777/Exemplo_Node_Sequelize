//config.js


require("dotenv").config();

const Sequelize = require('sequelize');


// ================== formas de conecxão 1 ================================
/*
 var username = process.env.DB_USER;
 var password = process.env.DB_PASSWORD;
 var database = process.env.DB_NAME;
 var url = process.env.DB_HOST;
 var mysql = 'mysql';

const db = new Sequelize(database, username, password, {
  host: url,
  dialect: mysql,
  port:3306
});
*/

//  ================== formas de conecxão 2 ================================

 const db = new Sequelize(process.env.URL)



module.exports = db;
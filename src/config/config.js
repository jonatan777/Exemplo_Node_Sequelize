//config.js


const Sequelize = require('sequelize');


/*  ================== formas de conecxão 1 ================================
 var username = 'root';
 var password = 'jonatan';
 var database = 'sequelizenode';
 var url = '172.18.0.2';
 var mysql = 'mysql';

const db = new Sequelize(database, username, password, {
  host: url,
  dialect: mysql,
  port:3306
});
*/

//  ================== formas de conecxão 2 ================================

const db = new Sequelize('mysql://root:jonatan@172.18.0.3:3306/sequelizenode')

//  ================== formas de conecxão 3 ================================

/*
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});
*/



module.exports = db;


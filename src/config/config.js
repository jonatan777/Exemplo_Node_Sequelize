//config.js

const { Sequelize } = require('sequelize');

module.exports = new Sequelize({
    username: 'root',
    password: 'jonatan',
    database: 'dbExemplo',
    host: '172.18.0.2',
    dialect: 'mysql'
});
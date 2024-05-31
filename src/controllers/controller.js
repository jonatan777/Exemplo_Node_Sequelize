// const bodyParser = require("body-parser");
// const { ObjectID } = require("bson");
// const db = require("../models/jogadorModel");
// let fs = require('fs');
const db = require("../models/modelExample.js");
//--------------------------------------------------------------------------- home --------------------------------------------//

exports.index = async function (application, req, res) {
    return res.json({ name: "Ciclano Fulano" });
}

exports.db = async function (application, req, res) {
    console.log(`Banco de dados conectado: ${db}`);

    return res.json({ name: "aqui e o banco" });
}

// const bodyParser = require("body-parser");
// const { ObjectID } = require("bson");
// const db = require("../models/jogadorModel");
// let fs = require('fs');
const Users = require("../models/modelExample.js");

//--------------------------------------- index --------------------------------------------//

exports.index = function fulano() {
  var nome = "Ciclano Fulano"
  return nome
}


exports.FindAll = async function All() {
    const users = await Users.findAll();
    return users
  }




// controller.js

const Users = require("../models/modelExample.js");


module.exports = {

index() {
  var nome = "Ciclano Fulano"
  return nome
},


 async FindAll() {
  const users = await Users.findAll();
  return users
 },

 async FindId(id){
  const user = await Users.findByPk(id);
  return user
 },


 async Create(user){
   const NewUser = await Users.create(user)
   return NewUser
 },


 async Update(user, id){
   var OldUser = await Users.findByPk(id);
   const resultadoSave = await OldUser.update(user);
   return resultadoSave
 },


 async Delete(id){
  const user = await Users.findByPk(id);
  user.destroy();
  return user
 }

}

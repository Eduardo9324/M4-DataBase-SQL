const { Sequelize, Op } = require('sequelize');
const modelCharacter = require('./models/Character.js');
const modelAbility = require('./models/Ability.js');
const modelRole = require('./models/Role.js');

const db = new Sequelize(
  "postgres://postgres:ANZA2321cris@localhost:5432/henry_sequelize",
  {
    logging: false,
  }
);

/* db.authenticate()  // VERIFICA QUE LOS PARAMETROS PARA LA CONEXCION ESTE BIEN
  .then(() => {
    console.log("Conexion exitosa");
  }).catch(error => console.log(error)); */





modelCharacter(db);
modelAbility(db);
modelRole(db);

module.exports = {
  ...db.models,
  db,
  Op
}
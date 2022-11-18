const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define(
    "Character",
    {
      code: {
        type: DataTypes.STRING(5), //le paso el tipo de dato y especifico la cantidad de caracteres
        primaryKey: true, //lo establesco como clave primaria
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false, // no permite que sea nulo
        unique: true, // unique hace que sea unico
      },
      age: {
        type: DataTypes.INTEGER,
      },
      race: {
        type: DataTypes.ENUM(
          // ENUM permite valores variables
          "Human",
          "Elf",
          "Machine",
          "Demon",
          "Animal",
          "Other"
        ),
        defaultValue: "Other", // coloca un valor por defecto
      },
      hp: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      mana: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      date_added: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW, // pone por defecto la fecha actual
      },
    },
    {
      timestamps: false, // desabilita los campos createdAty updatedAt 
    }
  );
}
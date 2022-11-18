const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define("Ability", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "compositeIndex",  // la combinacion es unica 
    },
    description: {
      type: DataTypes.TEXT,
    },
    mana_cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
      unique: "compositeIndex", // Asi se estan combinando en una sola
    },
  });
}
"use strict";
module.exports = (sequelize, DataTypes) => {
  const Barang = sequelize.define(
    "Barang",
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter your name"
        }
      },

      harga: {
        type: DataTypes.DOUBLE,
        allowNull: {
          args: false,
          msg: "Please enter the price"
        }
      }
    },
    {}
  );
  Barang.associate = function(models) {
    // associations can be defined here
  };
  return Barang;
};

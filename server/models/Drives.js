module.exports = (sequelize, DataTypes) => {
  const Drives = sequelize.define("Drives", {
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rotation_speed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  });

  Drives.associate = (models) => {
    Drives.belongsTo(models.Interfaces, {
      foreignKey: "InterfaceId",
      as: "Interface",
    });
    Drives.belongsTo(models.FormFactors, {
      foreignKey: "FormFactorId",
      as: "FormFactor",
    });
  };
  return Drives;
};

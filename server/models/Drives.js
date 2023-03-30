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
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  });

  Drives.associate = (models) => {
    Drives.belongsTo(models.Interfaces, {
      foreignKey: { name: "InterfaceId", allowNull: false },

      as: "Interface",
    });
    Drives.belongsTo(models.FormFactors, {
      foreignKey: { name: "FormFactorId", allowNull: false },
      as: "FormFactor",
    });
  };
  return Drives;
};

module.exports = (sequelize, DataTypes) => {
  const Interfaces = sequelize.define("Interfaces", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  Interfaces.associate = (models) => {
    Interfaces.hasMany(models.Drives, {
      onDelete: "cascade",
    });
  };

  return Interfaces;
};

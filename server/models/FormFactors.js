module.exports = (sequelize, DataTypes) => {
  const FormFactors = sequelize.define("FormFactors", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  FormFactors.associate = (models) => {
    FormFactors.hasMany(models.Drives, {
      onDelete: "cascade",
    });
  };

  return FormFactors;
};

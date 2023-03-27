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
        rotation_speed: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
    })

    return Drives
}
//brand
//model
//rotation_speed
//price


//interface
//phsical factors
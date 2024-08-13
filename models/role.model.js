module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("Role", {
        name: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        }
    });

    return Role;
};
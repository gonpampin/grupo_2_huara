module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name: {
            type: dataTypes.STRING,
            notNull: false
        },
        last_nema: {
            type: dataTypes.STRING,
            notNull: false
        },
        Avatar: {
            type: dataTypes.STRING(45),
            notNull: false
        },
        password: {
            type: dataTypes.STRING,
            notNull: false
        },
        email: {
            type: dataTypes.STRING,
            notNull: false
        },
        

    };
    let config = {
        tableName: 'Users',
        timestamps: true,
        underscored: true,
        paranoid: true
    };
    const Users = sequelize.define(alias, cols, config)

    Users.associate = models => {
        Users.belongsTo(models.Users, {as: 'users_categories', foreignKey: 'category_id'});
    }

    return Users
}
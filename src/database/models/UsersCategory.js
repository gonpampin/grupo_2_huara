module.exports = (sequelize, dataTypes) => {
    let alias = 'UsersCategories';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        category: {
            type: dataTypes.STRING(45),
            notNull: false
        }

    };
    let config = {
        tableName: 'users_categories',
        timestamps: true,
        underscored: true,
        paranoid: true
    };
    const UsersCategories = sequelize.define(alias, cols, config)

    UsersCategories.associate = models => {
        UsersCategories.hasMany(models.UsersCategories, {as: 'users_categories',});
    }

    return UsersCategories
}
module.exports = (sequelize, dataTypes) => {
    let alias = 'users_categories';
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
        },
       
        

    };
    let config = {
        tableName: 'users_categories',
        timestamps: true,
        underscored: true,
        paranoid: true
    };
    const users_categories = sequelize.define(alias, cols, config)

    users_categories.associate = models => {
        users_categories.hasMany(models.Category, {as: 'users_categories',});
    }

    return products_categories
}
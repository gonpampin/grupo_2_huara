module.exports = (sequelize, dataTypes) => {
    let alias = 'products_categories';
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
        tableName: 'products_categories',
        timestamps: true,
        underscored: true,
        paranoid: true
    };
    const products_categories = sequelize.define(alias, cols, config)

    products_categories.associate = models => {
        products_categories.belongsTo(models.Category, {as: 'products_categories',});
    }

    return products_categories
}
module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductsCategories';
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
        tableName: 'products_categories',
        timestamps: true,
        underscored: true,
        paranoid: true
    };
    const ProductsCategories = sequelize.define(alias, cols, config)

    ProductsCategories.associate = models => {
        ProductsCategories.hasMany(models.ProductsCategories, {as: 'products_categories',});
    }

    return ProductsCategories
}
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
        }

    };
    let config = {
        tableName: 'products_categories',
        timestamps: false
        
    };
    const ProductsCategories = sequelize.define(alias, cols, config)

    ProductsCategories.associate = function(models) {
        ProductsCategories.hasMany(models.Products, {
            as: "products",
            foreignKey: "product_category_id"
        });
    }

    return ProductsCategories
}
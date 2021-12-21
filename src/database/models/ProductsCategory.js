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
        timestamps: true,
        underscored: true,
        paranoid: true
    };
    const ProductsCategories = sequelize.define(alias, cols, config)

    ProductsCategories.associate = function(models) {
        ProductsCategories.hasMany(models.Products, {
            as: "productos",
            foreignKey: "product_category_id"
        });
    }

    return ProductsCategories
}
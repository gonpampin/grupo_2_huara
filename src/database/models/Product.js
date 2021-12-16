module.exports = (sequelize, dataTypes) => {
    let alias = 'Products';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            notNull: false
        },
        description: {
            type: dataTypes.TEXT,
            notNull: false
        },
        image: {
            type: dataTypes.STRING(45),
            notNull: false
        },
        price: {
            type: dataTypes.DOUBLE,
            notNull: false
        },
        stock: {
            type: dataTypes.INTEGER,
            notNull: false
        },
        product_category_id: {
            type: dataTypes.INTEGER,
            notNull: false
        }
        

    };
    let config = {
        tableName: 'products',
        timestamps: false,
        underscored: true,
        paranoid: true
        
    };
    const Products = sequelize.define(alias, cols, config)


    Products.associate = function(models) {
        Products.belongsTo(models.ProductsCategories, {
            as: "categorias_producto",
            foreignKey: "product_category_id"
        });
    }

   /* Products.associate = models => {
        Products.belongsTo(models.ProductsCategories, {
            as: 'products_categories',
            foreignKey: 'product_category_id'});

        Products.hasMany(models.OrderDetails, {
            as: 'order_details',
            foreignKey: 'product_id'})
    }*/
    

    return Products
}
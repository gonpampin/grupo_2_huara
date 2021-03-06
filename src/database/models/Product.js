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
            type: dataTypes.STRING(100),
            notNull: false
        },
        description: {
            type: dataTypes.STRING(500),
            notNull: false
        },
        image: {
            type: dataTypes.STRING(500),
            notNull: false
        },
        price: {
            type: dataTypes.DOUBLE,
            notNull: false
        },
        stock: {
            type: dataTypes.INTEGER,
            notNull: false
        }
        

    };
    let config = {
        tableName: 'products',
        timestamps: false
        
    };
    const Products = sequelize.define(alias, cols, config)


    Products.associate = function(models) {
        Products.belongsTo(models.ProductsCategories, {
            as: "category",
            foreignKey: "product_category_id"
        });
    }

 

    return Products
}
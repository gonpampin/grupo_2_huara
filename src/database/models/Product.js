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
        }
        

    };
    let config = {
        tableName: 'products',
        timestamps: true,
        underscored: true,
        paranoid: true
    };
    const Products = sequelize.define(alias, cols, config)

    Products.associate = models => {
        Products.belongsTo(models.Products, {as: 'products', });
    }

    return Products
}
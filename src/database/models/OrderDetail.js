module.exports = (sequelize, dataTypes) => {
    let alias = 'OrderDetails';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        quantity: {
            type: dataTypes.STRING(45),
            notNull: false
        },
        amount: {
            type: dataTypes.DOUBLE,
            notNull: false
        }
      


    };
    let config = {
        tableName: 'order_details',
        timestamps: true,
        underscored: true,
        paranoid: true
    };
    const OrderDetails = sequelize.define(alias, cols, config)

    // OrderDetails.associate = models => {
    //     OrderDetails.hasMany(models.Products, {
    //         as: 'order_details',
    //         foreignKey: 'product_id'
    //     });

    //  OrderDetails.hasMany(models.Orders, {
    //         as: 'order_details',
    //         foreignKey: 'order_id'
    //     });
    // }

    return OrderDetails
}
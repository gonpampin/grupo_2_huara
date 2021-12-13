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

    OrderDetails.associate = models => {
        OrderDetails.belongsTo(models.OrderDetails, {
            as: 'order_details',
        });
    }

    return OrderDetails
}
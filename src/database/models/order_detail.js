module.exports = (sequelize, dataTypes) => {
    let alias = 'order_details';
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
        item_amount:{
            type: dataTypes.decimal(2,0),
            notNull: false
        },
        total_amount:{
            type: dataTypes.decimal(2,0),
            notNull: false
        },
        

    };
    let config = {
        tableName: 'order_details',
        timestamps: true,
        underscored: true,
        paranoid: true
    };
    const order_details = sequelize.define(alias, cols, config)

    order_details.associate = models => {
        order_details.belongsTo(models.order_details, {as: 'order_details',});
    }

    return order_details
}
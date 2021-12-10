module.exports = (sequelize, dataTypes) => {
    let alias = 'orders';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        status: {
            type: dataTypes.STRING(20),
            notNull: false
        },
       
        

    };
    let config = {
        tableName: 'orders',
        timestamps: true,
        underscored: true,
        paranoid: true
    };
    const orders = sequelize.define(alias, cols, config)

    orders.associate = models => {
        orders.belongsTo(models.Category, {as: 'orders',});
    }

    return orders
}
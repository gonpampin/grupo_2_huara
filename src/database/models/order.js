module.exports = (sequelize, dataTypes) => {
    let alias = 'Orders';
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
        }
       
    };
    let config = {
        tableName: 'orders',
        timestamps: true,
        underscored: true,
        paranoid: true
    };
    const Orders = sequelize.define(alias, cols, config)

    Orders.associate = models => {
        Orders.belongsTo(models.Users, {
            as: 'orders',
            foreignKey: "user_id",
        });
    }

    return Orders
}
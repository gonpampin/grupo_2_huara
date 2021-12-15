module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name: {
            type: dataTypes.STRING,
            notNull: false
        },
        last_name: {
            type: dataTypes.STRING,
            notNull: false
        
        },
        password: {
            type: dataTypes.STRING,
            notNull: false
        },
        email: {
            type: dataTypes.STRING,
            notNull: false
        }
        
    };
    let config = {
        tableName: 'users',
        timestamps: false,
     
    };
    const Users = sequelize.define(alias, cols, config)

    /*Users.associate = models => {
        Users.belongsTo(models.Users, {as: 'users', foreignKey: 'category_id'});
    }*/

    return Users
}
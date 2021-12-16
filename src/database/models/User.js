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
            type: dataTypes.STRING(45),
            notNull: false
        },
        last_name: {
            type: dataTypes.STRING(45),
            notNull: false
        
        },
        password: {
            type: dataTypes.STRING(45),
            notNull: false
        },
        email: {
            type: dataTypes.STRING(45),
            notNull: false
        },
        image:{
            type: dataTypes.STRING(45),
            notNull: false
        },
        user_category_id: {
            type: dataTypes.INTEGER,
            notNull: false
        }
        
    };
    let config = {
        tableName: 'users',
        timestamps: false,
     
    };
    const Users = sequelize.define(alias, cols, config)
    
    Users.associate = function(models) {
        Users.belongsTo(models.UsersCategories, {
            as: "categorias_usuario",
            foreignKey: "user_category_id"
        });
    }
    /*Users.associate = models => {
        Users.belongsTo(models.Users, {as: 'users', foreignKey: 'category_id'});
    }*/

    return Users
}
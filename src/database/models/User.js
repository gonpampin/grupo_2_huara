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
            type: dataTypes.STRING(100),
            notNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            notNull: false
        
        },
        password: {
            type: dataTypes.STRING(100),
            notNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            unique: true,
            isEmail: true,
            notNull: true
        },
        image:{
            type: dataTypes.STRING(100),
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
            as: "userCategory",
            foreignKey: "user_category_id"
        });
    }

    return Users
}
module.exports = (sequelize, dataTypes) => {
    let alias = 'UsersCategories';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        category: {
            type: dataTypes.STRING(45),
            notNull: false
        }

    };
    let config = {
        tableName: 'users_categories',
        timestamps: true,
        underscored: true,
        paranoid: true
    };
    const UsersCategories = sequelize.define(alias, cols, config)

  
    UsersCategories.associate = function(models) {
        UsersCategories.hasMany(models.Users, {
            as: "categorias",
            foreignKey: "user_category_id"
        });
    }
    
    return UsersCategories
}
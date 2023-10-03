const Sequelize = require('sequelize');

class User extends Sequelize.Model{
    static initiate(sequelize){
        User.init({
            password:{
                type:Sequelize.STRING(100),
                allowNull:false,
            },
            ids:{
                type:Sequelize.STRING(100),
                allowNull:false,
            },
        },{
            sequelize,
            timestamps:true,
            underscored:false,
            tableName:'users',
            modelName:'User',
            paranoid:true,
            charset:'utf8',
            collate:'utf8_general_ci',
        })
    }
    static associate(db){
        
    }
}

module.exports = User;
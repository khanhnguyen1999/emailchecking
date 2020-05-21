const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const db = require('./db')
// const users = [
//     {id:1,idAccount:'1760082',displayName:'Nguyen Phuoc Khanh',password:'$2b$10$fVXyRyquZuSD0OL/LYPxHuZ..UMsFa9tePSHUgzwAJo5V5d.y5QUS',phone:'+84 344488931',mail:'npkhanh17ck1@gmail.com'}
// ]; 
console.log(db);
const Model = Sequelize.Model;
class User extends Model {
    static async findUserById(id){
        return User.findByPk(id)
    }
    static async findUserByEmail(email){
      return User.findOne({
            where:{
                email,
            }
        })
    }
    static hassPassword(password){
        return bcrypt.hashSync(password,10);
    }
    static verifyPassword(passwordHash,password)
    {
        return bcrypt.compareSync(passwordHash,password)
    }
}
User.init({
  // attributes
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique:true
  },
  displayName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  token:{
    type:Sequelize.STRING,
  }
}, {
  sequelize: db,
  modelName: 'user'
});
module.exports = User
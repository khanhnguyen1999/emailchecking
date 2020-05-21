const Sequelize = require('sequelize')
const connectionString = 'postgres://postgres:@localhost:5432/todos'
const db = new Sequelize(connectionString);
module.exports = db;
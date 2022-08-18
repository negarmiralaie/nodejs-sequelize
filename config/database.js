const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

// To connect to the database that we made in mysql workbench, We need to create a new instance of sequelize and
// pass in the database name of db, username, and password, options object.
// For creating an instance of Sequelize we should say: new Constructor -> Constructor is Sequelize
module.exports = new Sequelize('new_db', 'root', 'root', {
    dialect: 'postgres',
});

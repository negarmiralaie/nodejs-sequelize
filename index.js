const Sequelize = require('sequelize');
// We do not need to require mysql2 bc it is done automatically internally by sequelize.

// To connect to the database that we made in mysql workbench, We need to create a new instance of sequelize and
// pass in the database name of db, username, and password, options object.
// For creating an instance of Sequelize we should say: new Constructor -> Constructor is Sequelize
const sequelize = new Sequelize('new_schema', 'root', 'KrystalMrMin107', {
    dialect: 'mysql',
    port: 3306,
});

// To check if we are successfully connected to the database, we can use the method sequelize.authenticate()
// This function returns a promise.
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.log('error connecting to db', error);
});

console.log('Connection to db was successful.');
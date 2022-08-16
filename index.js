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
async function connectDb() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connectDb();

// We use define to represent a table.
// By default every column has : default: null so you must set it if you want it to be otherwise
const User = sequelize.define('user', {
    username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.DataTypes.STRING
    },
    age: {
        type: Sequelize.DataTypes.INTEGER,
        default: 21,
    },

});

// Model synchronization: Inserts a table that you defined with sequelize into your database.
// Sync is another way of writing sql
User.sync().thne(() => {
    console.log('Table and model is ssynced successfully.');
}).catch((error) => {
    console.log('Error syncing the table and model.');
},
// Note that sequelize automatically plurizations name to be Users so Users will be the name of the table.
// B setting freezeTableName to true, we say we do not want the name of the table to be pluralized.
{
    freezeTableName: true,
});

console.log('Connection to db was successful.');
const Sequelize = require('sequelize');
const database = require('../config/database');

// const Gig = database.define('gig', {});
// We use define to represent a table.
// By default every column has : default: null so you must set it if you want it to be otherwise
const User = database.define('user', {
    // Primary key: a unique id to identify a record in a table. It is automatically set by sequelize
    // In case we wanted to create primary key as we want
    user_id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true,
    },
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
// Note that sync method creates a table only if it does not exist. WE can turn it off by passing force: true -> Drops previous table and creates a new one
// Or by giving alter: true rather than force: true, It won't drop the table
User.sync({ force: true }).then(() => {
    console.log('Table and model is ssynced successfully.');
}).catch((error) => {
    console.log('Error syncing the table and model.');
},
{
    // Note that sequelize automatically plurizations name to be Users so Users will be the name of the table.
    // B setting freezeTableName to true, we say we do not want the name of the table to be pluralized.
    freezeTableName: true,
    // Sequelize automatically adds createdAt and updatedAT.
    // WE can turn that off using timestamps: false
    timestamps: false,
});

module.exports = User;



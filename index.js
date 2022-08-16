const express = require('express');
// const exphbs = require('express-handlebars');
const path = require('path');
const Sequelize = require('sequelize');
const PORT = process.env.PORT || 5000;
const app = express();

// Dtabase
const database = require('./config/database');

const testDatabaseConnection = require('./config/test_database_connection');
testDatabaseConnection();

// // Model synchronization: Inserts a table that you defined with sequelize into your database.
// // Sync is another way of writing sql
// // Note that sync method creates a table only if it does not exist. WE can turn it off by passing force: true -> Drops previous table and creates a new one
// // Or by giving alter: true rather than force: true, It won't drop the table
// User.sync({ force: true }).then(() => {
//     console.log('Table and model is ssynced successfully.');
// }).catch((error) => {
//     console.log('Error syncing the table and model.');
// },
// {
//     // Note that sequelize automatically plurizations name to be Users so Users will be the name of the table.
//     // B setting freezeTableName to true, we say we do not want the name of the table to be pluralized.
//     freezeTableName: true,
//     // Sequelize automatically adds createdAt and updatedAT.
//     // WE can turn that off using timestamps: false
//     timestamps: false,
// });

app.get('/', (req, res) => {
   res,rend('Home page~'); 
});

app.listen(PORT, () => { console.log(`Server started at ${PORT}`) });
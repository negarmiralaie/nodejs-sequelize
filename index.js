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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// useres routes
app.use('/users', require('./routes/users'));

app.get('/', (req, res) => {
   res,rend('Home page~'); 
});

app.listen(PORT, () => { console.log(`Server started at ${PORT}`) });
const database = require('./database');

// To check if we are successfully connected to the database, we can use the method sequelize.authenticate()
// This function returns a promise.
async function connectDb() {
    try {
        await database.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = connectDb;
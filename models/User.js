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

module.exports = User;

// const gig = database.define('gig', {
//     // Primary key: a unique id to identify a record in a table. It is automatically set by sequelize
//     // In case we wanted to create primary key as we want
//         user_id: {
//             type: Sequelize.DataTypes.INTEGER,
//             primaryKey: true,
//             autoincrement: true,
//         },
//         title: {
//             type: Sequelize.DataTypes.STRING,
//             allowNull: false
//         },
//         technologies: {
//             type: Sequelize.DataTypes.STRING
//         },
//         description: {
//             type: Sequelize.DataTypes.INTEGER,
//             default: 21,
//         },
    
//     });


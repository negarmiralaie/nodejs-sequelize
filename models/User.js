const Sequelize = require('sequelize');
const {
    DataTypes
} = require('sequelize');
const database = require('../config/database');
const bcrypt = 'bcrypt';
const zlib = require('zlib');

// const Gig = database.define('gig', {});
// We use define to represent a table.
// By default every column has : default: null so you must set it if you want it to be otherwise
const User = database.define('user', {
    // Primary key: a unique id to identify a record in a table. It is automatically set by sequelize
    // In case we wanted to create primary key as we want
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        // We can't have repeated emails
        unique: true,
        validate: {
            len: [4, 6],
            isIn: ['aaa', 'bbbb']
        },
        // Manipulation in getters does not affect how data is stored. It only affects how data is displayed initially. So if you check it in db our data is the same.
        get() {
            // Is used for accessing current value, it's better to use it only in getters and outside, it's better to use dot
            const rawValue = this.getDataValue('username');
            return rawValue.toUppercase();
        },
    },
    password: {
        type: DataTypes.STRING,
        // We manipulate password and then save it into db, so data will be changed in db
        // Sequelize calls setter function before sending any data to db. Db will recieve the data that we altered using setter
        // Note that getters and setters do not support asynchronous functions so we can not use any function inside them that is asynchronous so we have to use synchronous functions.
        set(pass) {
            const salt = bcrypt.genSaltSync(12);
            const hashedPassword = bcrypt.hashSync(pass, salt);
            this.setDataValue('password', hashedPassword);
        }
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true,
            isIn: {
                args: ['aaa@a.com', 'bbbb@b.com'],
                msg: 'The provided email must be one of the followings...'
            },
            // custom validator
            myEmailValidator(value) {
                if (value === null) throw new Error('please enter an email');
            }
        }
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 21,
        validate: {
            isOldEnough(value) {
                if (value <21) throw new Error('Too young!!');
            },
            isNumeric: {
                msg: 'You must provide a number'
            }
        }
    },
    description: {
        type: DataTypes.STRING,
        // Since descriptions may be long and heavy, we add a setter to first compress descriptions and then save it to db, and also a getter to first uncompress description and then display it
        set(value) {
            // deflateSync takes a buffer which can be a buffer object, a typed array, a data view, arraybuffer, string
            // We are passing string bc we are passing DataTypes.STRING
            // And then we will use .toString bc the output will be buffer
            // base64 is a type encoding to turn binary data into text
            const compressed = zlib.deflateSync(value).toString('base64');
            this.setDataValue('description', compressed);
        },
        get() {
            const value = this.getDataValue('description');
            // inflateSync is used to uncompress data. it takes a buffer as the first argument.
            // Buffer.from() is used to create a new buffer from the argument we pass. We want to create a buffer from our string
            const uncompressed = zlib.inflateSync(Buffer.from(value, 'base64'));
            return uncompressed;
        },
    },
    // Virtual field: fields that sequelize populates under the hood, but they are not stored in our db. and a common use of them is to combine different attributes e.x.: we want to retrieve our username and description combined so we can make a virtual field called aboutUser
    // To make a virtual field we must set DataTypes.VIRUAL
    // Note that it won't have a column in our db, it will just combine columns so we can use it for displaying to user
    // We must define a getter for them to display combined data to user
    aboutUser: {
        type: DataTypes.VIRTUAL,
        get() {
            return `${this.username} ${this.description}`
        }
    }
});

// Model synchronization: Inserts a table that you defined with sequelize into your database.
// Sync is another way of writing sql
// Note that sync method creates a table only if it does not exist. WE can turn it off by passing force: true -> Drops previous table and creates a new one
// Or by giving alter: true rather than force: true, It won't drop the table
User.sync({
    alter: true
}).then(() => {
    console.log('Table and model is ssynced successfully.');
}).catch((error) => {
    console.log('Error syncing the table and model.');
}, {
    // Note that sequelize automatically plurizations name to be Users so Users will be the name of the table.
    // B setting freezeTableName to true, we say we do not want the name of the table to be pluralized.
    freezeTableName: true,
    // Sequelize automatically adds createdAt and updatedAT.
    // WE can turn that off using timestamps: false
    timestamps: false,
    // Model-wide validation: this is fired after all column-wide validations are passed
    validate: {
        usernamePassMatch() {
            if (this.username === this.password) throw new Error ('password and username can not be the same')
            return 'Passed all!!';
        }
    }
});

module.exports = User;
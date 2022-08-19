const express = require('express');
const router = express.Router();
const database = require('../config/database');
const UserModel = require('../models/User');
const createError = require('http-errors');
const { Op } = require('sequelize');

router.get('/get-all', async (req, res) => {
   try{
        // findAll returns an array 
        const allUsers = await UserModel.findAll();
        // We can set attributes to get only certain columns
        // const allUsers = await UserModel.findAll({ attributes: ['username', 'password'] });
        // When we want to return username as myName and password as pwd: -> AS
        // const allUsers = await UserModel.findAll({ attributes: [['username', 'myName'], ['password', 'pwd']] });
        // Aggregation -> sequelize.fn
        //const allUsers = await UserModel.findAll({ attributes: [[database.fn('SUM', database.col('age')), 'howOld']]});
        //We want to get every field except the password
        //const allUsers = await UserModel.findAll({ attributes: {exclude: ['password']}});
        //where is used to filter the query based on certain conditions
        //here we want to get everything where the age is 45
        //const allUsers = await UserModel.findAll({ where: { age: 45 } });
        // Get username where age is 45
        //const allUsers = await UserModel.findAll({ attributes: ['username'], where: { age: 45 } });
        //const allUsers = await UserModel.findAll({ where: { age: 45, username: John } });
        //limit is used to limit the number of rows returned
        //const allUsers = await UserModel.findAll({ limit: 2 });
        // order by is used to sort the results in descending or ascending order
        // order by ages desecnding
        // const allUsers = await UserModel.findAll({ order: [['age', 'DESC']] });
        // group by is used to group rows that have same values into summery rows, it works similar to order except that it does not take direction as the last argument(ASC or DESC)
        //  It takes a string directly to the group key, group key is mostly used with aggregate functions
        // Here we want to add all the ages of the usernames that are the same -> we will get a username and the sum of the ages with that username
        // const allUsers = await UserModel.findAll({ attribute : ['username', 
        //         [database.fn('SUM', database.col('age')), 'sum_age']], group: ['username'] });
        // Operators in sequelized are used by op
        // return results that age is 45 or username is John
        // const allUsers = await UserModel.findAll({ where: {[Op.or]: {username: 'John', age: 45}} });
        // const allUsers = await UserModel.findAll({ where: {username: 'John', age: 45}});
        // const allUsers = await UserModel.findAll({ where: {[Op.and]: {username: 'John', age: 45}} });
        // We can get the same result without using Op.and
        // const allUsers = await UserModel.findAll({ where: {username: 'John', age: 45}});
        // Al users that their age is greater than 45
        // const allUsers = await UserModel.findAll({ where: {age: {[Op.gt]: 45}} });
        // All users that their age is less than 45 or their age is null
        // const allUsers = await UserModel.findAll({ where: {age: {[Op.or]: { [Op.lt]: 45, [Op.eq]: null}}} });
        // All users that their username's length is 6
        // const allUsers = await UserModel.findAll({ where: database.where(database.fn('char_length', database.col('username')), 6)  });

        console.log('allUsers', allUsers);
        return res.json(allUsers);
   } catch(error) {
        console.log('error', error);
        return es.status(500).json(error);
   }

});

router.post('/create', async (req, res) => {
    const { username, password, age } = req.body;
    try{
      // const user = await UserModel.build({ username, password, age });
      // user.username = user.username + '1';
      // await user.save();
      // below line can be used instead of 3 above lines
      const user = await UserModel.create({ username, password, age })
      // Note: if you do not provide age, it will be 21 bc it hase defaultValu of 21
      // But if you do not provide password it will be null bc it doesn't have defaultValue.
      // In javascript null is an object and an assigned value 

      // In case you used create method to add user, you can below lines to change the username before saving it to the database
      // user.username = user.username + '1';
      // return user.save();
      // When you make several changes to the saved user after creating it but you want only one of them to be stores, use below line
      // return user.save( {fields: ['age']} )
      // For deleting a user, you can use below lines
      // return user.destroy();
      // Does nothing to data, just returns original data
      // user.reload();
      // save method only updates fields that are changes so if you do not change any fields it won't do anything and won't generate a query. -> This is good for efficiency 
      // Decreases age by 2 -> age = age -2
      // user.decrement({ age: 2 });

      return UserModel.bulkCreate([
         { username: 'user1', password: 'pass1', age: 21 },
         { username: 'user2', password: 'pass2', age: 22 },
      ],
            // bulkCreate is used to create multiple users at once, it takes an array
      // This method returns an array of objects so we can't use .toJson() on it so we should use foreach and then .toJson() on each object
      // Note that bulkCreate ignores validation for inputs!! but create gives us validationError and take care of validation
      // So by passing validation: true, we tell it to not ignore validation -> but it decreases validation performance and makes your app slower!!!
      { validate: true}
      )
      return res.status(200).json(user);
    } catch(error) {
        console.log('error', error);
        return res.status(500).json(error);
    }
});

// update query
// where age is 25, change username to pizza
// Username.update({ username: pizza}, {where: {age: 25}});
// Do that where the age is greater than 25
// UserModel.update({ username: pizza}, {where: {age: {[Op.gt]: 25}}});
// Returns data which has the maximum age
// UserModel.max('age')
// UserModel.sum('age');
// UserModel.sum('age', { where: {age: 21}});



router.delete('/delete', async (req, res) => {
   try{

      // Delete all users that have age 25
      return UserModel.destroy({ where: { age: 45 } });
      // Deletes all the records in the table but not the table itself
      // return UserModel.destroy({ truncate: true });
   } catch(error) {
      console.log('error', error);
   }
});

module.exports = router;
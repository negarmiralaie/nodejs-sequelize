const express = require('express');
const router = express.Router();
const database = require('../config/database');
const UserModel = require('../models/User');
const createError = require('http-errors');

router.get('/get-all', async (req, res) => {
   try{
      // findAll returns an array 
      const allUsers = await UserModel.findAll();
      // We can set attributes to get only certain columns
      // const allUsers = await UserModel.findAll({ attributes: ['username', 'password'] });
      // When we want to return username as myName and password as pwd: -> AS
      // const allUsers = await UserModel.findAll({ attributes: [['username', 'myName'], ['password', 'pwd']] });
      // Aggregation -> sequelize.fn
      const allUsers = await UserModel.findAll({ attributes: [database.fn()] });

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

router.delete('/delete', async (req, res) => {
   try{

   } catch(error) {

   }
});

router.get('/search', async (req, res) => {
    const { term } = req.query;
    try{
        const users = await UserModel.findAll({
            where: {
                name: {}
            }
        });
    } catch(error) {
        console.log('error', error);
        return res.status(500).json(error);
    }
});

module.exports = router;
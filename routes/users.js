const express = require('express');
const router = express.Router();
const database = require('../config/database');
const UserModel = require('../models/User');
const createError = require('http-errors');

router.get('/get-all', async (req, res) => {
   try{
        const allUsers = await UserModel.findAll();
        console.log('allUsers', allUsers);
        return res.json(allUsers);
   } catch(error) {
        console.log('error', error);
        return es.status(500).json(error);
   }

});

router.post('/add', async (req, res) => {
    const { name, email, password } = req.body;
    try{
        const user = await UserModel.create({ name, email, password });
        return res.status(200).json(user);
    } catch(error) {
        console.log('error', error);
        return res.status(500).json(error);
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
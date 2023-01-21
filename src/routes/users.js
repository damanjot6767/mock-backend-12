const express = require('express');
const UserModel = require('../models/user.model');
const UserDetails = express.Router();


//Get users profile
UserDetails.get('/:id',async function(req, res) {
    let {id} = req.params;
    try{
        let users = await UserModel.findOne({_id:id});
        res.send(users)
        return;
    }
    catch(err){
        res.send(err.message);
        return;
    } 
});

module.exports = UserDetails;
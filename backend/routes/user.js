const router = require('express').Router();
const User = require('../models/user.model');

router.route('/').get((req,res) => {
   
});

router.route('/login').get((req,res) => {
    let username = req.body.username;
    let pazzword = req.body.password;
    let validUser = false;
    User.find().then(users => {
        users.forEach(user => {
            if(user.username === username){
                if(user.password === pazzword){
                    validUser = true;
                    console.log("User is authenticated.");
                    break;
                }
            }
        });
    });
})

module.exports = router;
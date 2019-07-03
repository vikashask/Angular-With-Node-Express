let mongoose = require('mongoose');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

var User = require('../models/user'); // get our mongoose model
// var config = require('../config'); // get our config file
let config = require('config'); //we load the db location from the JSON files

function authenticate(req, res) {

    // find the user
    User.findOne({
        name: req.body.name
    }, function (err, user) {

        if (err) throw err;

        if (!user) {
            res.json({
                success: false,
                message: 'Authentication failed. User not found.'
            });
        } else if (user) {

            // check if password matches
            if (user.password != req.body.password) {
                res.json({
                    success: false,
                    message: 'Authentication failed. Wrong password.'
                });
            } else if (req.body.password && req.body.name) {

                // if user is found and password is right
                // create a token
                var payload = {
                    admin: user.admin,
                    user: user.password
                }
                var token = jwt.sign(payload, config.secrectKey, {
                    algorithm: 'HS256',
                    expiresIn: 86400 // expires in 24 hours
                });
                console.log(token, '--------token---------------');

                res.json({
                    success: true,
                    message: 'Got token!',
                    token: token
                });
            } else {
                res.json({
                    success: false,
                    message: 'User name and password not found',
                });
            }
        }
    });
}

module.exports = {
    authenticate
}
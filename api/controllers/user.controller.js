var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

module.exports.getAllUsers = function(req, res){
    User
    .find()
    .exec(function(err, users){
        if (err){
            console.log(err);
            res
            .status(500)
            .json(err);
        } else {
            console.log('GET call succeeded.');
            res
            .status(200)
            .json(users);
        };
    });
};

module.exports.postNewUser = function(req, res){

    console.log('Registering users.');

    var username = req.body.username;
    var password = req.body.password;

    User.create({
        username: username,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    }, function(err, user){
        if (err){
            console.log(err);

            res
                .status(400)
                .json(err);
        } else {
            console.log('User successfully created', user)

            res
                .status(201)
                .json(user);
        }
    });

};

module.exports.deleteUserById = function(req, res){
    var id = req.params.id;

    User
    .findByIdAndRemove(id)
    .exec(function(err, user){
        if (err){
            console.log(err);
            res
            .status(404)
            .json(err);
        } else {
            console.log('Delete call succeeded.');
            res
            .status(204)
            .json();
        };
    });
};

module.exports.login = function(req, res){

    console.log('Logging in user.');

    var username = req.body.username;
    var password = req.body.password;

    User.findOne({
        username: username
    }).exec(function(err, user){
        if (err){
            console.log(err);

            res
                .status(400)
                .json(err);
        } else {
            console.log('User found', user);

            if (bcrypt.compareSync(password, user.password)){
                var token = jwt.sign({username: user.username}, 's3cr3t', {expiresIn: 3600});

                res
                    .status(200)
                    .json({success: true, token: token});
            } else {
                res
                    .status(401)
                    .json('Authentication failed!');
            }

        }
    });

};

module.exports.authenticate = function(req, res, next){

    var headerExists = req.headers.authorization;

    if (headerExists){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, 's3cr3t', function(error, decoded){

            if (error){
                console.log(error);
                res
                    .status(401)
                    .json('Unauthorized!');
            } else {
                req.user = decoded.username;
                next();
            }

        })
    } else {
        res
            .status(403)
            .json('No token provided!');
    }

};


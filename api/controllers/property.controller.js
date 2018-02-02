var mongoose = require('mongoose');
var Property = mongoose.model('Property');

module.exports.getAllProperties = function(req, res){
    Property
    .find()
    .exec(function(err, properties){
        if (err){
            console.log(err);
            res
            .status(500)
            .json(err);
        } else {
            console.log('GET call succeeded.');
            res
            .status(200)
            .json(properties);
        };
    });
};
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        username:
        {
            type: String,
            default: '',
            trim: true,
            require: 'username is required'
        },
        email:
        {
            type: String,
            default: '',
            trim: true,
            require: 'email address is required'
        }
    },
    {
        collection: 'user'
    }
);

// configure options for user model

let options = ({ missingPasswordError: 'Wrong / Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);
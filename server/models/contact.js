let mongoose = require('mongoose');

let Contact = mongoose.Schema
(
    {
        name:
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
        },
        number:
        {
            type: String,
            default: '',
            trim: true,
            require: 'email address is required'
        }
    },
    {
        collection: 'contact'
    }
);

// configure options for user model

module.exports.Contact = mongoose.model('Contact', Contact);
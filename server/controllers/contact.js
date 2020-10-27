let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// create the user model instance 
let contactModel = require('../models/contact');
let Contact = contactModel.Contact;

module.exports.displayBuisnessList = (req, res, next) =>{
    Contact.find((err, ContactList) =>{
        if(err)
        {           
            return console.error(err);            
        }
        else
        {
            res.render('buisnessContacts', {
                 title: 'Business Contacts', 
                 ContactList,
                 username: req.user ? req.user.username: ''});
        }
    });   
}

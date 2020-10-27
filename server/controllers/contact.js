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

module.exports.displayAddPage = (req, res, next) =>{
    res.render('contactList/add',
    {
        title: 'Add Contact',
        username: req.user ? req.user.username: ''
    });
}

module.exports.processAddPage = (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "email": req.body.email,
        "number": req.body.number
    })
    Contact.create(newContact, (err, Contact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the Contactlist
            res.redirect('/buisness-contacts')
        }
    })
}

module.exports.displayUpdateContactPage = (req, res, next) => {
    id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // show the editview
            res.render('contactList/update', 
            {
                title: 'Update Contact', contact: contactToEdit, 
                username: req.user ? req.user.username : ''
            });
        }
    });    
}

module.exports.processUpdateContactPage = (req, res, next) => {
    let id = req.params.id;
    
    let updatedContact = Contact ({
        "_id": id,
        "name": req.body.name,
        "email": req.body.email,
        "number": req.body.number
    });

    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the Contactlist
            res.redirect('/buisness-contacts');
        } 
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id

    Contact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the movielist
            res.redirect('/buisness-contacts');
        } 
    });
}

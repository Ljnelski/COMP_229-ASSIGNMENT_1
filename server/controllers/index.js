let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// create the user model instance TODO

//router logic
module.exports.displayHomePage = (req, res, next) =>{
    res.render('index', { title: 'Home'});
}

module.exports.displayAboutPage = (req, res, next) =>{
    res.render('index', { title: 'About me' });
}

module.exports.displayProjectsPage = (req, res, next) =>{
    res.render('index', { title: 'Projects' });
}

module.exports.displayServicesPage = (req, res, next) =>{
    res.render('index', { title: 'Services' });
}

module.exports.displayContactPage = (req, res, next) =>{
    res.render('contact', { title: 'Contact me' });
}
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// create the user model instance 
let userModel = require('../models/user.js');
let User = userModel.User;

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

module.exports.displayLoginPage = (req, res, next) =>{
    //check if the user is already logged in
    if(!req.user)
    {
        res.render('authentication/login',
        {
            title: 'Login',
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName: ''
        });        
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req, res, next) =>{
    passport.authenticate('local',    
    (err, user, info) => {
        if (err) 
        {
              return next(err);  
        }        
        // if there is a user login error
        if (!user) 
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) =>{
            //server error
            if (err)
            {
                return next(err);    
            }            
            return res.redirect('/');
        });
    })(req, res, next);
}

module.exports.displayRegisterPage = (req, res , next) =>{
    //check if the user is already logged in
    if(!req.user)
    {
        res.render('authentication/register',
        {
            title: 'Register',
            messages: req.flash('registerMessage'),
            username: req.user ? req.user.username : ''
        });
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processRegisterPage = (req, res, next) => {
    //instantiate a user object
    let newUser = new User({
        username: req.body.username,
        // password: req.body.password
        email: req.body.email,
    });
    
    User.register(newUser, req.body.password, (err) => {
        if (err) 
        {
            console.log("Error: Inserting New User");
            if(err.name == "UserExistsError")
            {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log('Error: User Already exsits');
            }          
            return res.render('authentication/register', {
                title: 'Register',
                messages: req.flash('registerMessage'),
                username: req.user ? req.user.username : ''
            });    
        }
        else
        {
            // if no error exists, then registration is successful
            
            // redirect user and authenticated them

            // res.json({success: true, msg: 'User Registered Successfully'});

            return passport.authenticate('local')(req, res, () =>{
                console.log('registration successful');
                res.redirect('/');
            })
        }
    })
}
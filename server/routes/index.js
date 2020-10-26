let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index.js');

/* GET display home page. */
router.get('/', indexController.displayHomePage);
router.get('/home', indexController.displayHomePage);

/* GET display about page. */
router.get('/about-me', indexController.displayAboutPage);

/* GET display projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET display services page. */
router.get('/services', indexController.displayServicesPage);

/* GET display contact page. */
router.get('/contact', indexController.displayContactPage);

/* GET display login page. */
router.get('/login', indexController.displayLoginPage);

/* POST process login page. */
router.post('/login', indexController.processLoginPage);

/* GET register page*/
router.get('/register', indexController.displayRegisterPage)

/* POST process register page. */
router.post('/register', indexController.processRegisterPage)

module.exports = router;

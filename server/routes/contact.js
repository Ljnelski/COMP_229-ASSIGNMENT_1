let express = require('express');
let router = express.Router();

let contactsController = require('../controllers/contact.js');

/* GET display list of Contacts */
router.get('/', contactsController.displayBuisnessList);

/* GET display Add Contact Page */
router.get('/add', contactsController.displayAddPage);

/* POST post Add Contact Page */
router.post('/add', contactsController.processAddPage);

/* GET display update Contact Page */
router.get('/update/:id', contactsController.displayUpdateContactPage);

/* POST post update Contact Page */
router.post('/update/:id', contactsController.processUpdateContactPage);

// /* GET display Update Contact Page */
router.get('/delete/:id', contactsController.performDelete);


module.exports = router;
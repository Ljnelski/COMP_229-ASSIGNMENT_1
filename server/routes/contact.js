let express = require('express');
let router = express.Router();

let contactsController = require('../controllers/contact.js');

router.get('/list', contactsController.displayBuisnessList);

// /* GET display Add Contact Page */
// router.get('', )

// /* GET display Update Contact Page */
// router.get('', )

module.exports = router;
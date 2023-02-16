const express = require("express");
const router = express.Router();



const aboutController = require('../controllers/about')
const indexController = require('../controllers/index')
const contactController = require('../controllers/contact')
const merchController = require('../controllers/merch')


router.get('/', indexController.getIndex);
router.get('/about', aboutController.getAbout);
router.get('/contact', contactController.getContact);
router.get('/merch', merchController.getMerch);

module.exports = router;
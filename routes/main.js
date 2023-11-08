const express = require("express");
const router = express.Router();



const aboutController = require('../controllers/about')
const indexController = require('../controllers/index')
const contactController = require('../controllers/contact')
const thankYouController = require('../controllers/thankYou')


router.get('/', indexController.getIndex);
router.get('/about', aboutController.getAbout);
router.get('/contact', contactController.getContact);
router.get('/thankYou', thankYouController.getThankYou);
router.get('/notVerified', contactController.getNotVerified);

module.exports = router;
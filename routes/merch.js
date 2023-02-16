const express = require("express");
const router = express.Router();

const merchController = require('../controllers/merch')


router.get('/item/:id', merchController.getItem)




module.exports = router;
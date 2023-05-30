//Declare requirement variables
const express = require('express');
const app = express();
const PORT = 8300;
const cors = require('cors')
const fetch = require('node-fetch')

const mainRoutes = require('./routes/main');
const contactRoutes = require('./routes/contact');
const multer = require('multer')
var upload = multer();

//configs link
require('dotenv').config({path: '.env'})



//set middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))



app.use(upload.array()); 
app.use(express.static('public'));


//set routes
app.use('/', mainRoutes);
app.use('/contact', contactRoutes)





app.listen(process.env.PORT || PORT, () => console.log(`Server is running on Port: ${PORT}`))
//Declare requirement variables
const express = require('express');
const app = express();
const PORT = 8300;
const cors = require('cors')
const fetch = require('node-fetch')
const multer = require('multer')
var upload = multer();
const { Resend } = require('resend')
const resend = new Resend(`${process.env.RESEND_API_KEY}`);
const bodyParser = require('body-parser');

const mainRoutes = require('./routes/main');
const contactRoutes = require('./routes/contact');


//configs link
require('dotenv').config({path: '.env'})



//set middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(upload.array()); 
app.use(express.static('public'));

app.use(cors());

//set routes
app.use('/', mainRoutes);
app.use('/contact', contactRoutes)





app.listen(process.env.PORT || PORT, () => console.log(`Server is running on Port: ${PORT}`))
//Declare requirement variables
const express = require('express');
const app = express();
const PORT = 8300;
const cors = require('cors')
const fetch = require('node-fetch')

const mainRoutes = require('./routes/main');
const merchRoutes = require('./routes/merch')


//configs link
require('dotenv').config({path: '.env'})



//set middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))


//set routes
app.use('/', mainRoutes);
app.use('/merch', merchRoutes)


app.get('/cart', async (req,res) => {
    try {
        res.render('cart.ejs')
    } catch(err) {
        if(err) {
            console.log(`I\'m borked. Error: ${err}`)
            return res.status(500).send(err)
        }
    }
})






/*
fetch(URL,params)
.then(result=>result.json())
.then(data=> 
    {console.log(data)} ) 
*/

//Set up listener
app.listen(process.env.PORT || PORT, () => console.log(`Server is running on Port: ${PORT}`))
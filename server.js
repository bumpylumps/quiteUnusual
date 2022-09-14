//Declare requirement variables
const express = require('express');
const app = express();
const PORT = 8300;
const cors = require('cors')
const fetch = require('node-fetch')


//configs link
require('dotenv').config({path: '.env'})



//set middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))


//Getting episodes from buzzsprout db
let originalFresh = 'Wed, 17 Aug 2022 18:06:04 GMT'
let tag = 'W/"23823c33da2c67e553b1334596171947"'
let params = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.TOKEN}`,
        'If-None-Match': `${tag}`,
        'If-Modified-Since': `${originalFresh}`
    }
}


//GET views
app.get('/', async (req,res) => {
    try {
        const response = await fetch(`${process.env.URL}`, params)
        const data = await response.json()

        let fresh = response.headers.get('Last-Modified')
        let ETag = response.headers.get('ETag')
        
        if(fresh !== originalFresh){
            originalFresh = fresh 
        } 
        
        if(ETag !== tag){
            tag = ETag
        }

        //res.json(data)
        
        //console.log(data)
        res.render('index.ejs', { episodes: data })
    } catch(err) {
        if(err) {
            console.log(`I\'m borked. Error: ${err}`)
            return res.status(500).send(err)
        }
    }
})

app.get('/about', async (req,res) => {
    try {
        res.render('about-us.ejs')
    } catch(err) {
        if(err) {
            console.log(`I\'m borked. Error: ${err}`)
            return res.status(500).send(err)
        }
    }
})

app.get('/merch', async (req,res) => {
    try {
        res.render('merch.ejs')
    } catch(err) {
        if(err) {
            console.log(`I\'m borked. Error: ${err}`)
            return res.status(500).send(err)
        }
    }
})

app.get('/item', async (req,res) => {
    try {
        res.render('item.ejs')
    } catch(err) {
        if(err) {
            console.log(`I\'m borked. Error: ${err}`)
            return res.status(500).send(err)
        }
    }
})


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
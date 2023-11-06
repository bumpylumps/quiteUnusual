const { Resend } = require('resend');
const request = require('request');
const axios = require("axios")
const RECAPTCHA_SECRET_KEY = `${process.env.RECAPTCHA_SECRET_KEY}`


module.exports = {
    getContact: async (req,res) => {
        try {
            res.render('contact.ejs')
        } catch(err) {
            if(err) {
                console.log(`I\'m borked. Error: ${err}`)
                return res.status(500).send(err)
            }
        }
    },

    // getValidation: async (request, response) =>{ 
        // const { ValidationToken } = request.body;
        // const { data } = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${ValidationToken}`);
// 
// 
        // console.log(data)
        // if(data.success){
            // return true;
        // } else {
            // return false;
        // }
    // },

    submitFeedback: async (req, res) => {
        const resend = new Resend(`${process.env.RESEND_API_KEY}`);
        

        // let message = {
        //     name: req.body.name,
        //     email: req.body.email,
        //     subject: req.body.subject,
        //     message: req.body.message
        // }

        // let validation = getValidation();

        // if(validation === true){  
            try {  
                const data = await resend.sendEmail({
                   from: "FanMail@quiteunusualpod.com",
                   to: "bumpsites@gmail.com",
                   subject: req.body.subject,
                   text: `${req.body.name} sent you fanmail from ${req.body.email}! 
                   Their message: ${req.body.message}`,
                 });

                res.redirect('/thankYou')
           
            } catch(e) {
            console.log(e)
            res.status(400).json(e);
          } 
        
        // } else {
                // console.log('it\'s broken')
            // }
        // }
                
    } 
}
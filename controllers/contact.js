const { Resend } = require('resend');
const request = require('request');
const axios = require("axios")
const Recaptcha = require('recaptcha').Recaptcha;
const bodyParser = require('body-parser');





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

    getValidation: async (req, res) =>{ 
        const RECAPTCHA_SECRET_KEY = `${process.env.RECAPTCHA_SECRET_KEY}`
        const captchaValue = req.body['g-recaptcha-response'];
        
        try{ 
            const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${captchaValue}`);

            console.log(response.data);
            if(response.data.success){
                
                res.status(200).json({ message: `${JSON.stringify(response.data)}`})
            } else {
                res.status(400).json({ error: 'recaptcha verification failed' });
            }
        } catch(error) {
            console.error('recaptcha verification error: ', error);
        }
    
    },

    submitFeedback: async (req, res) => {
        const resend = new Resend(`${process.env.RESEND_API_KEY}`);
         
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
        

                
    } 
}
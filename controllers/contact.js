const { Resend } = require('resend')



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

    submitFeedback: async (req,res) => {
        const resend = new Resend(`${process.env.RESEND_API_KEY}`);
        
        let message = {
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        }
        
        try {
            
             const data = await resend.sendEmail({
               from: "FanMail@quiteunusualpod.com",
               to: "quiteunusualpod@gmail.com",
               subject: req.body.subject,
               text: `${req.body.name} sent you fanmail from ${req.body.email}! 
               Their message: ${req.body.message}`,
             });

            res.redirect('/thankYou')
        
          }
          catch(e) {
            console.log(e)
            res.status(400).json(e);
          }

        // try {
        

        //     console.log(message);
        //     //res.status(200).json(data);
        //     res.redirect('/')

        // } catch(err) {
        //     console.log('I\'m not working' + ' ' +  err )

        // }
    } 


}
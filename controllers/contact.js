


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

        let message = {
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        }
        
        try {
            // const data = await resend.sendEmail({
            //   from: "alexander.fulop.art@gmail.com",
            //   to: "alexander.fulop.art@gmail.com",
            //   subject: "hello world",
            //   text: "it works!",
            // });
        
            //res.status(200).json(data);
            console.log(message)
            res.redirect('/thankYou')
        
          }
          catch(e) {
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
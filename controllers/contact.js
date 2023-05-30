
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
            message: req.body.message
        }
        

        try {
            console.log(message)
            res.json(message)

        } catch(err) {
            console.log('I\'m not working')

        }
    } 


}
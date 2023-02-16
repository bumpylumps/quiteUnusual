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
    }
}
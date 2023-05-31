module.exports = {
    getThankYou: async (req,res) => {
        try {
            res.render('thank-you.ejs')
        } catch(err) {
            if(err) {
                console.log(`I\'m borked. Error: ${err}`)
                return res.status(500).send(err)
            }
        }
    }
}; 
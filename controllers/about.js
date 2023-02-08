module.exports = {
    getAbout: async (req,res) => {
        try {
            res.render('about-us.ejs')
        } catch(err) {
            if(err) {
                console.log(`I\'m borked. Error: ${err}`)
                return res.status(500).send(err)
            }
        }
    }
}; 
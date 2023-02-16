

module.exports = {

    getMerch: async (req,res) =>  {
        const fetch = require('node-fetch')


        //Getting inventory from printify
        const inventoryParams =  {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.INVENTORYTOKEN}`
            }
        }

       
        try {
            const response = await fetch(`${process.env.INVENTORY}`, inventoryParams)
            const data = await response.json()
    
            
            res.render('merch.ejs', { inventory: data })
        } catch(err) {
            if(err) {
                console.log(`I\'m borked. Error: ${err}`)
                return res.status(500).send(err)
            }
        }

    }, 

    getItem: async(req,res) => {
        const fetch = require('node-fetch')


        //Getting inventory from printify
        const inventoryParams =  {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.INVENTORYTOKEN}`
            }
        }

        try {

            const response = await fetch(`${process.env.INVENTORY}`, inventoryParams)
            const data = await response.json()
            const item = await data.data.find(item => item.id === req.params.id)

            res.render('item.ejs', { item: item })

        } catch(err) {
            if(err) {
                console.log(`I\'m borked. Error: ${err}`)
                return res.status(500).send(err)
            }
        }
    }
}
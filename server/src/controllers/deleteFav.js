const { Favorite } = require('../DB_connection')


const deleteFav = async(req, res) => {

    try {
        const {id} = req.params

        await Favorite.destroy({
            where: {
                id
            }
        })

        const allFavourites = await Favorite.findAll()

        return res.status(200).json(allFavourites)
        
    } catch (error) {
        return res.status(500).json({error: error.message})
    }

}


module.exports = deleteFav;
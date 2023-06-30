const {Favorite} = require('../DB_connection')


const postFav = async(req, res) => {

    try {
        const{ id, name, origin, status, image, species, gender } = req.body;

        if(!id || !name || !origin || !status || !image || !species || !gender) {
            return res.status(401).send('Faltan Datos')
        }

        const favorito = await Favorite.findOrCreate({
            where: {
                id,
                name,
                origin,
                status,
                image,
                species,
                gender
            }
        })

        console.log(favorito)

        const allFavourites = await Favorite.findAll()
        return res.status(200).json(allFavourites)
        
    } catch (error) {
        return res.status(500).json({error: error.message})
    }

}

module.exports = postFav
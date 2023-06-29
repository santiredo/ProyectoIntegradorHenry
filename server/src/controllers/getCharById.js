const axios = require('axios')

const url = "https://rickandmortyapi.com/api/character";

const getCharById = async(req, res) => {
    const {id} = req.params
    
    try {
        const response = await axios(`${url}/${id}`)
        const result = response.data

        if (result.name) {
            const character = {
                key: result.id,
                id: result.id,
                name: result.name,
                gender: result.gender,
                species: result.species,
                origin: result.origin?.name,
                image: result.image,
                stauts: result.status
            }
            return res.status(200).json(character)
        }
        throw new Error('El id poporcionado no coincide con un personaje')
    } catch(error){
        return res.status(500).send(error.message)
    }
}

module.exports = getCharById


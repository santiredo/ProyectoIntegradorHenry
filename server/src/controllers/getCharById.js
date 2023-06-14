const axios = require('axios')

function getCharById (res, id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)

    .then(({data}) => {
        const charProps = {
            id: id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
        }

        res .writeHead(200, {'Content-type': 'application/json'})
            .end(JSON.stringify(charProps))
    })
    .catch(error => {
        res .writeHead(500, {'Content-type':'text/plain'})
            .end(error.message)
    })
}

module.exports = getCharById;
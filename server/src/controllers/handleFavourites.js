let myFavourites = [];


const postFav = (req, res) => {
    const character = req.body;

    myFavourites.push(character);

    res.status(200).json(myFavourites);
}

const deleteFav = (req,res) => {
    const { id } = req.params;

    const characterFiltered = myFavourites.filter(favourite => favourite.id !== +id)

    myFavourites = characterFiltered

    res.status(200).json(characterFiltered)
}

module.exports = {
    postFav,
    deleteFav
}
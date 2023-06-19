const {login} = require('../controllers/login')
const {getCharById} = require('../controllers/getCharById')
const {postFav, deleteFav} = require('../controllers/handleFavourites')

const router = require('express').Router();

router.get('/character/:id', getCharById)

router.post('/login', login)

router.post('/fav', postFav)

router.delete('/fav/:id', deleteFav)

module.exports = router;
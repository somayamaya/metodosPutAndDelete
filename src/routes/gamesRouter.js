const express = require('express')
const controller = require('../controllers/gamesController')

const router = express.Router()
const cors = require('cors')

router.put('/games/:id', cors(), controller.atualizaGamesPut)

router.patch('/games/:id', cors(), controller.AtualizaGamesPatch)





module.exports = router
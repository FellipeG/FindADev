const { Router } = require('express')
const axios = require('axios')
const Dev = require('./models/Dev')

const DevController = require('./controllers/DevController')

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello world!' })
})

routes.post('/devs', DevController.store)

module.exports = routes
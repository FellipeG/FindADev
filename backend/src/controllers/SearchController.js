const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(req, res) {
        const { latitude, longitude, techs } = req.query

        const arrTechs = parseStringAsArray(techs)

        console.log(arrTechs)

        const devs = await Dev.find({
            techs: {
                $in: arrTechs
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        })

        return res.json({ devs })
    }
}



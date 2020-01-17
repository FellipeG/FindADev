const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://Fellipe:6QMEr1MkSm1f7MIs@felcluster-si5kt.mongodb.net/omni10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use(express.json())
app.use(routes)

app.listen(3333)
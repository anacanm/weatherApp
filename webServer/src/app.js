const express = require('express')
const cors = require('cors')
const chalk = require('chalk')
const weather = require('./services/weather.js')

const app = express()
app.use(cors()) //allows other services to communicate with this one

const PORT = '9000'

//root page
app.get('', (req, res) => {
    res.send({
        title: "Weather App",
        name: "Anacan"
    })
})


app.get('/data', (req, res) => {
    if (req.query.q) {
        weather.getWeather(req.query.q)
        .then(result => res.send(result))
    }
    else {
        res.send({
            error: 'You must provide a query value'
        })
    }
})

app.get('*', (req, res) => {
    res.send({error: "404"})
})

app.listen(PORT, () => {
    console.log(chalk.green("Server is running on"), chalk.yellow(`localhost:${PORT}`))
})
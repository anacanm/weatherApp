const axios = require('axios')
const config = require('../config')

const coordinates = async (location) => {
    let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${config.mapBoxKey}`

    let center = (await axios.get(url)).data.features[0].center

    return {
        latitude: center[1], longitude: center[0]
    }
}

const weather = async ({ latitude, longitude }) => {
    let url = `https://api.darksky.net/forecast/${config.darkSkyKey}/${latitude},${longitude}`

    let weather = (await axios.get(url)).data.currently

    return weather
}

const getWeather = (q) => {

    let location = q.trim().replace(" ", "%20")

    return coordinates(location)
        .then(data => weather(data))
        .then(result => [result])

}

module.exports = {
    getWeather: getWeather
}


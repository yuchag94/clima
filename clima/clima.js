const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=ec6ed2d448a9b210dddbc4ba7b5b662f`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}
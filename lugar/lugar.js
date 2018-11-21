const axios = require('axios');


const getlugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y`)

    if (resp.data.status === "ZERO_RESULTS") {

        throw new Error(`No hay resultado para la ciudad ${direccion} `)
    }


    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getlugarLatLng
}
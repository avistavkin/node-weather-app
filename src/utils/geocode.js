const request = require('request');

const geocode = (location, callback) => {
    const infoObj = {
        url: 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(location) + '.json?access_token=pk.eyJ1IjoiYW52aXN0YXZraW4iLCJhIjoiY2xndnhoYnJpMGMwZzNmbXVwcnBid'
    }

    request(infoObj, (error, { body }) => {
        error=1;
        if (error) {
            callback('Unable to connect to weather services.', undefined);
        }
        else if (body.error || !body.features.length) {
            callback('Unable to find location.', undefined);
        }
        else {
            callback( undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            });
        }
    })
}

module.exports = geocode;
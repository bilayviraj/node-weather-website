const request = require('request');

const forecast = (latitude, longitude, callback) => {
    
    const url = 'https://api.darksky.net/forecast/6b73fff4f0da02ecd5ae969f175acb41/' + latitude + ',' + longitude + '?units=si';
    request({url, json: true}, (error, response, body) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined);
        } else if(body.error === 0){
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined, {
                currentTemp: body.currently.temperature,
                currentSummary: body.currently.summary,
                lowTemp: body.daily.data[0].temperatureLow,
                highTemp: body.daily.data[0].temperatureHigh,
                summary: body.daily.data[0].summary
            });
        }
    });
};

module.exports = forecast;
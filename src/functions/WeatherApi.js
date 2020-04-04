'use strict';

const weather = require('weather-js');

module.exports.findWeather = function getWeather (location, unit, callback){
    // Code necessary to consume the Weather API and respond
    weather.find({search: location, degreeType: unit}, function(err, result) {
        if (err) {
        return callback(err.message);
        }

        callback(null, result);
    });
}; 
    
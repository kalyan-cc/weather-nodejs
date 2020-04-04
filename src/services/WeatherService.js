'use strict';

const weatherApi = require('../functions/WeatherApi');

module.exports.getWeatherService = function getWeather (req, res, next) {
    
    let location = req.swagger.params.location.value;
    let unit = req.swagger.params.unit.value || 'F'; // Default to 'F' if unit is not provided
  
    // Check that location is provided
    if (typeof location === 'undefined') {
      return send400(res, next, 'location is a required query parameter');
    }
  
    // Code necessary to check that if unit is provided, it is one of the valid options
    if (['C', 'F'].indexOf(unit) === -1) {
      return send400(res, next, 'unit must be either C or F');
    }
    weatherApi.findWeather(location,unit, (err,result)=>{
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result, null, 2));
    });
}
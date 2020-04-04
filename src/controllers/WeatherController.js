'use strict';

const weatherService = require('../services/WeatherService');

module.exports.getWeather = function getWeather (req, res, next) {
  weatherService.getWeatherService(req,res,next);
};
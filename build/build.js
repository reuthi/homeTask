require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("request-promise");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
  weatherAppId: '2ad061981457f03dc56e37cea31924eb',
  port: process.env.PORT || 8080
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes_api_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_error_controller__ = __webpack_require__(10);





var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.urlencoded({ extended: true }));
app.use('/api/v1', __WEBPACK_IMPORTED_MODULE_2__routes_api_router__["a" /* router */]);
app.use(__WEBPACK_IMPORTED_MODULE_4__controllers_error_controller__["a" /* errorHandler */]);
app.listen(__WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* config */].port, function () {
  return console.log('Running in ' + process.env.NODE_ENV + ' on port ' + __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* config */].port);
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return router; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_country_controller__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_weather_controller__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_filter_controller__ = __webpack_require__(9);





var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();
var continent = 'Americas';

router.get('/countries/:continent?', async function (req, res, next) {
  if (req.params.continent) continent = req.params.continent;
  try {
    var countries = await Object(__WEBPACK_IMPORTED_MODULE_1__controllers_country_controller__["a" /* getCountries */])(continent);
    res.json(countries);
  } catch (error) {
    next(error);
  }
});

router.get('/weather', async function (req, res, next) {
  try {
    var countries = await Object(__WEBPACK_IMPORTED_MODULE_1__controllers_country_controller__["a" /* getCountries */])(continent);
    var sortedCountries = await Object(__WEBPACK_IMPORTED_MODULE_2__controllers_weather_controller__["a" /* getWeather */])(countries);
    res.json(sortedCountries);
  } catch (error) {
    next(error);
  }
});

router.post('/filter', async function (req, res, next) {
  if (req.body.type) continent = req.body.type;
  try {
    var countries = await Object(__WEBPACK_IMPORTED_MODULE_1__controllers_country_controller__["a" /* getCountries */])(continent);
    var sortedCountries = await Object(__WEBPACK_IMPORTED_MODULE_2__controllers_weather_controller__["a" /* getWeather */])(countries);
    var filterdCountries = Object(__WEBPACK_IMPORTED_MODULE_3__controllers_filter_controller__["a" /* filterCountries */])(req.body.filter, sortedCountries);
    res.json(filterdCountries);
  } catch (error) {
    next(error);
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCountries; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request_promise__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request_promise__);


var getCountries = async function getCountries(continent) {
  return await __WEBPACK_IMPORTED_MODULE_0_request_promise___default()({
    method: 'GET',
    url: 'https://restcountries.eu/rest/v2/region/' + continent
  }).then(function (res) {
    return JSON.parse(res);
  });
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getWeather; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request_promise__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(2);




var getWeather = async function getWeather(countries) {
  var sortedCountries = await __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a.mapSeries(countries, async function (country) {
    if (country.capital) {
      return await __WEBPACK_IMPORTED_MODULE_0_request_promise___default()({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + country.capital + '&APPID=' + __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* config */].weatherAppId + '&units=metric'
      }).then(function (weather) {
        weather = JSON.parse(weather);
        return {
          country: country.name,
          capital: country.capital,
          weatherForecast: weather.weather[0].main,
          weatherTemperature: weather.main.temp
        };
      });
    }
  });
  return sortedCountries.filter(function (country) {
    return country;
  });
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return filterCountries; });

var filterCountries = function filterCountries(filter, countries) {
  return countries.filter(function (country) {
    return country.weatherTemperature >= filter.temp.min && country.weatherTemperature <= filter.temp.max && country.weatherForecast.toLowerCase() === filter.weather.type.toLowerCase();
  });
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return errorHandler; });

var errorHandler = function errorHandler(err, req, res, next) {
  if (process.env.NODE_ENV === 'development') {
    console.error(err);
  }
  res.status(err.status || 500).json('Something went wrong');
};

/***/ })
/******/ ]);
//# sourceMappingURL=build.js.map
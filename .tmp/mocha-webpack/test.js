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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("request-promise");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chai__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chai___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chai__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_weather_controller__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_country_controller__ = __webpack_require__(6);




describe("testing the weather controller", function () {
  it('should return json with all the requested keys', async function (done) {
    var countries = await Object(__WEBPACK_IMPORTED_MODULE_2__controllers_country_controller__["a" /* getCountries */])('Americas');
    var sortedCountries = await Object(__WEBPACK_IMPORTED_MODULE_1__controllers_weather_controller__["a" /* getWeather */])(countries);
    console.log('sortedCountries', sortedCountries);
    Object(__WEBPACK_IMPORTED_MODULE_0_chai__["expect"])(sortedCountries).to.have.all.deep.keys('country', 'capital', 'weatherForecast', 'weatherTemperature');
    done();
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("chai");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getWeather; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request_promise__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(5);




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
/* 4 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
  weatherAppId: '2ad061981457f03dc56e37cea31924eb',
  port: process.env.PORT || 8080
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCountries; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request_promise__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_request_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_request_promise__);


var getCountries = async function getCountries(continent) {
  return await __WEBPACK_IMPORTED_MODULE_0_request_promise___default()({
    method: 'GET',
    url: 'https://restcountries.eu/rest/v2/region/' + continent
  }).then(function (res) {
    return JSON.parse(res);
  });
};

/***/ })
/******/ ]);
//# sourceMappingURL=test.js.map
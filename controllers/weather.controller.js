import rp from 'request-promise'
import Promise from 'bluebird'
import { config } from '../config/config'

export const getWeather = async (countries) => {
  let sortedCountries = await Promise.mapSeries(countries, async country => {
    if(country.capital){
      return await rp({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&APPID=${config.weatherAppId}&units=metric`
      }).then(weather => {
        weather = JSON.parse(weather)
        return {
          country: country.name,
          capital: country.capital,
          weatherForecast: weather.weather[0].main,
          weatherTemperature: weather.main.temp
        }
      })
    }
  })
  return sortedCountries.filter(country=>country)
}
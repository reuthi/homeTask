
export const filterCountries = (filter, countries) => {
  return countries.filter(country => {
    return country.weatherTemperature >= filter.temp.min && country.weatherTemperature <= filter.temp.max && country.weatherForecast.toLowerCase() === filter.weather.type.toLowerCase()
  })
}
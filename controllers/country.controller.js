import rp from 'request-promise'

export const getCountries = async (continent) => {
  return await rp({
    method: 'GET',
    url: `https://restcountries.eu/rest/v2/region/${continent}`
  }).then(res=>JSON.parse(res))
}
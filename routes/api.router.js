import express from 'express'
import { getCountries } from '../controllers/country.controller'
import { getWeather } from '../controllers/weather.controller'
import { filterCountries } from '../controllers/filter.controller'

export const router = express.Router();
let continent = 'Americas'

router.get('/countries/:continent?', async (req, res, next) => {
  if (req.params.continent) continent = req.params.continent
  try {
    const countries = await getCountries(continent)
    res.json(countries)
  }
  catch (error) {
    next(error)
  }
})

router.get('/weather', async (req, res, next) => {
  try {
    const countries = await getCountries(continent)
    const sortedCountries =  await getWeather(countries)
    res.json(sortedCountries)
  }
  catch (error) {
    next(error)
  }
})

router.post('/filter', async (req, res, next) => {
  if(req.body.type) continent = req.body.type
  try {
    const countries = await getCountries(continent)
    const sortedCountries =  await getWeather(countries)
    const filterdCountries = filterCountries(req.body.filter, sortedCountries)
    res.json(filterdCountries)
  }
  catch (error) {
    next(error)
  }
})




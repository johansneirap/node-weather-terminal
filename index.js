import axios from 'axios'
import { readInput, inquirerMenu, pause } from './utils/inquirer.js'

const searchCityPlaces = async (city) => {
  const BASE_URL = 'https://url'

  return await axios.get(BASE_URL)
}

const main = async () => {
  let opt
  do {
    opt = await inquirerMenu()
    console.log({ opt })

    if (opt === 1) {
      // Show message
      const place = await readInput('City: ')
      console.log(place)
      // Search city places
      const res = await searchCityPlaces()
      console.log(res)
      // Select place
      // Weather
      // Show results
      console.log('\nCity Info'.green)
      console.log('City: ')
      console.log('Lat: ')
      console.log('Long: ')
      console.log('Temp: ')
      console.log('Min: ')
      console.log('Max: ')
    }

    if (opt !== 0) await pause()
  } while (opt !== 0)
}

main()

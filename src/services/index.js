import axios from 'axios'
import { API, URL } from '../../ENV'

async function infoMovie(id) {
  let list
  console.log(URL(API, `${id}`))
  await axios.get(URL(API, `${id}`)).then(function (response) {
    list = response.data
  })
    .catch(function (error) { console.log(error) })
  return list
}


async function latest() {
  let list
  console.log(URL(API, 'latest'))
  await axios.get(URL(API, 'latest')).then(function (response) {
    list = response.data
  })
    .catch(function (error) { console.log(error) })
  return list
}

export { latest, infoMovie };
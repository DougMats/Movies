
const API = 'https://api.themoviedb.org/3/movie/'

const URL = function URL(SERVER, URI) {
  const KEY = "?api_key=dc33721a19853ec53ff04095de666da0"
  return `${SERVER}/${URI}${KEY}`
}

export {
  URL,
  API
}
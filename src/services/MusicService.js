import fetchjsonp from 'fetch-jsonp'

const API_ENDPOINT = 'https://api.deezer.com/'

export default {
  request(search, order) {
    return fetchjsonp(`${API_ENDPOINT}search?q=${search}&order=${order}&output=jsonp`)
      .then(res => res.json())
      .then(res => {
        if (res.error === 1) {
            return Promise.reject(res);
        } else {
            return Promise.resolve(res);
        }
      })
  }
}

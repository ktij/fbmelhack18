import 'whatwg-fetch'

const API_ROOT = 'http://localhost:3004'

const callAPI = (endpoint, params) => {
  const url = `${API_ROOT}/${endpoint}`
  return fetch(url, {
    ...params
  }).then(response => {
    if (response.ok) {
      return response.json()
    } else if (response.status === 304) {
      return response.cache
    } else {
      return Promise.reject(new Error('error occured, check console'))
    }
  })
}

export const getItems = () => callAPI('items', { method: 'GET' })

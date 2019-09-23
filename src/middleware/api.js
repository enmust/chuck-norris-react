const API_ROOT = 'https://api.chucknorris.io/';

export function fetchCategories() {
  return fetch('https://api.chucknorris.io/jokes/categories')
    .then(response => {
      return response.json()
    }).catch(reason => {
      return {
        errorReason: reason
      }
    })
}

export function fetchFact(category) {
  let url = `${API_ROOT}jokes/random`;
  if (category && category !== 'random') url += `?category=${category}`;
  return fetch(url)
    .then(response => {
      return response.json()
    }).catch(reason => {
      return {
        errorReason: reason
      }
    })
}

export function fetchSearchFact(query) {
  if (query && query.trim().length >= 3) {
    let url = `${API_ROOT}jokes/search?query=${query.trim()}`;
    return fetch(url)
      .then(response => {
        return response.json()
      }).catch(reason => {
        return {
          errorReason: reason
        }
      })
  }
}

const BASE_URL = 'http://localhost:3000';
const API_KEY = 'tFf9CEgMi5kxVu-oII56SYh7t6FU2G-o0awm-I1mDsyzUTMLyRk9Y3dtOd0uah5yWKSR3Wv-XpUps_TNcpsXxQ';

export const Question = {
  create (params) {
    return fetch(
      `${BASE_URL}/api/v1/questions`,
      {
        method: 'POST',
        headers: {
          'Authorization': `API_KEY ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }
    ).then(res => res.json())
  },

  getAll () {
    return fetch(
      `${BASE_URL}/api/v1/questions`,
      {
        headers: {'Authorization': `API_KEY ${API_KEY}`}
      }
    ).then(res => res.json());
  },

  get (id) {
    return fetch(
      `${BASE_URL}/api/v1/questions/${id}`,
      {
        headers: {'Authorization': `API_KEY ${API_KEY}`}
      }
    ).then(res => res.json());
  }
}

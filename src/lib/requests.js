const BASE_URL = 'http://localhost:3000';
const API_KEY = 'tFf9CEgMi5kxVu-oII56SYh7t6FU2G-o0awm-I1mDsyzUTMLyRk9Y3dtOd0uah5yWKSR3Wv-XpUps_TNcpsXxQ';

export const Question = {
  getAll () {
    return fetch(
      `${BASE_URL}/api/v1/questions`,
      {
        headers: {api_key: API_KEY}
      }
    ).then(res => res.json());
  },

  get (id) {
    return fetch(
      `${BASE_URL}/api/v1/questions/${id}`,
      {
        headers: {api_key: API_KEY}
      }
    ).then(res => res.json());
  }
}

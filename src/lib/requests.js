const BASE_URL = 'http://localhost:3000';
const API_KEY = 'tFf9CEgMi5kxVu-oII56SYh7t6FU2G-o0awm-I1mDsyzUTMLyRk9Y3dtOd0uah5yWKSR3Wv-XpUps_TNcpsXxQ';

function getJwt () {
  return localStorage.getItem('jwt');
}

export const Question = {
  create (params) {
    return fetch(
      `${BASE_URL}/api/v1/questions`,
      {
        method: 'POST',
        headers: {
          'Authorization': `JWT ${getJwt()}`,
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
        headers: {'Authorization': `JWT ${getJwt()}`}
      }
    ).then(res => res.json());
  },

  get (id) {
    return fetch(
      `${BASE_URL}/api/v1/questions/${id}`,
      {
        headers: {'Authorization': `JWT ${getJwt()}`}
      }
    ).then(res => res.json());
  }
}

export const Token = {
  create (params) {
    return fetch(
      `${BASE_URL}/api/v1/tokens`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }
    ).then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        return {error: 'Something went wrong!'};
      }
    });
  }
}













// bump

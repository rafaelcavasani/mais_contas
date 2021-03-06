const BASE_API = 'https://5efb30ac80d8170016f7613d.mockapi.io/api/mock';

export default {
  signIn: async (username, password) => {
    const response = await fetch(`${BASE_API}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password}),
    });
    const json = await response.json();
    return json;
  },

  getBalance: async () => {
    const response = await fetch(`${BASE_API}/balance`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    return json;
  },

  getTransactions: async () => {
    const response = await fetch(`${BASE_API}/transactions`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    return json;
  },
};

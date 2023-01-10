const baseURL = 'http://127.0.0.1:3000/api/v1';

const setAuthToken = ({ headers }) => {
  localStorage.setItem('token', headers.get('Authorization'));
};

const postLoginOptions = (user) => ({

  method: 'POST',

  headers: { 'Content-Type': 'application/json' },

  body: JSON.stringify(user),

});

const postCarBookingOptions = (booking) => ({

  method: 'POST',

  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  },
  body: JSON.stringify(booking),

});

const api = {
  login: async (user) => {
    const response = await fetch(`${baseURL}/login`, {

      ...postLoginOptions({ user }),

    });

    setAuthToken(response);

    const data = await response.json();
    return data;
  },
  reserveCar: async (id, booking) => {
    const response = await fetch(`${baseURL}/users/${id}/reservations`, {
      ...postCarBookingOptions({ booking }),
    });

    const data = await response.json();
    return data;
  },

};

export default api;

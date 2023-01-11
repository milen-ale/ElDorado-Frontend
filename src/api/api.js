const baseURL = 'http://localhost:3000/api/v1';

const setAuthToken = ({ headers }) => localStorage.setItem('token', headers.get('Authorization'));

const unsetAuthToken = () => localStorage.removeItem('token');

const loginOptions = (user) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(user),
});

const registerOptions = (user) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  // headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')},
  body: JSON.stringify(user),
});

const carBookingOptions = (booking) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  },
  body: JSON.stringify(booking),
});

const removeReservationOptions = () => ({
  method: 'DELETE',
  headers: { Authorization: localStorage.getItem('token') },
});

const logoutOptions = () => ({
  method: 'DELETE',
  headers: { Authorization: localStorage.getItem('token') },
});

const api = {
  register: async (user) => {
    const response = await fetch(`${baseURL}/register`, {
      ...registerOptions({ user }),
    });

    setAuthToken(response);

    const data = await response.json();
    return data;
  },
  login: async (user) => {
    const response = await fetch(`${baseURL}/login`, {
      ...loginOptions({ user }),
    });

    const { status: code } = response;

    if (code === 200) setAuthToken(response);

    const data = await response.json();
    return data;
  },
  logout: async () => {
    const response = await fetch(`${baseURL}/logout`, {
      ...logoutOptions(),
    });

    const { status: code } = response;

    if (code === 200) unsetAuthToken();

    const data = await response.json();
    return data;
  },
  fetchAuthUser: async () => {
    const response = await fetch(`${baseURL}/users`, {
      headers: { Authorization: localStorage.getItem('token') },
    });

    const currentUser = await response.json();
    return currentUser;
  },
  fetchCars: async () => {
    const response = await fetch(`${baseURL}/cars`);
    const cars = await response.json();
    return cars;
  },
  fetchCar: async (id) => {
    const response = await fetch(`${baseURL}/cars/${id}`);
    const car = await response.json();
    return car;
  },
  reserveCar: async (id, booking) => {
    const response = await fetch(`${baseURL}/users/${id}/reservations`, {
      ...carBookingOptions({ booking }),
    });

    const data = await response.json();
    return data;
  },
  fetchReservations: async (id) => {
    const response = await fetch(`${baseURL}/users/${id}/reservations`);
    const reservations = await response.json();
    return reservations;
  },
  deleteReservation: async (userId, carId) => {
    const response = await fetch(`${baseURL}/users/${userId}/reservations/${carId}`, {
      ...removeReservationOptions(),
    });
    const data = await response.json();
    return data;
  },
};

export default api;

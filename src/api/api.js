const baseURL = 'https://eldorado.onrender.com/api/v1';

const api = {
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
};
export default api;

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://liams-eternal-counter.onrender.com'
});

export const fetchCounterById = async (counterId) => {
  const res = await axiosInstance.get(`/api/counters/${counterId}`);
  return res.data.counter;
};

export const updateCounterById = async (counterId) => {
  await axiosInstance.patch(`/api/counters/${counterId}`, {
    inc_count: 1
  });
};

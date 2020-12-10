import axios from 'axios';
const base = 'https://api.themoviedb.org/3/';
const apiKey = '?api_key=80a93484c75e692f238dca10a5115486';

export default function getApi(path, option = {}) {
  return axios.get(`${base}${path}${apiKey}`, {
    ...option,
  });
}
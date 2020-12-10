import axios from 'axios';
const base = 'https://api.themoviedb.org/3/';
const access_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGE5MzQ4NGM3NWU2OTJmMjM4ZGNhMTBhNTExNTQ4NiIsInN1YiI6IjVlODg3NDFlZDU1YzNkMDAxYTUxNjYxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z4IGyb91apmXQyZTO8v2GagDxCo5rPN_RkB5afn1_kc';

export default function getApi(path, option = {}, q = '') {
  return axios.get(`${base}${path}?${q}`, {
    ...option,
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
}

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.10:3333' //WI-FI
  //baseURL: 'http://192.168.100.58:3333' //cabo 
});

export default api;
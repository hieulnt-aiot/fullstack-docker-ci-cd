import axios from 'axios';

const baseURL =
  typeof window !== 'undefined' && window.env
    ? window.env.NEXT_PUBLIC_API_URL
    : 'http://localhost:3000';

console.log('axios base url: ' + baseURL);

const instance = axios.create({
  baseURL,
});

export default instance;

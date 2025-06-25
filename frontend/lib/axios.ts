import axios from 'axios';

const instance = axios.create({
  baseURL: typeof window !== 'undefined' ? window.env?.NEXT_PUBLIC_API_URL : '',
});

export default instance;

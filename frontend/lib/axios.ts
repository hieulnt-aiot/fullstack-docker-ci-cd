import { getBaseURL } from '@/utils/getBaseUrl';
import axios from 'axios';

const baseURL = getBaseURL();


console.log("axios base url: " + baseURL)

const instance = axios.create({
  baseURL,
});

export default instance;

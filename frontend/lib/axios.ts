import { getBaseURL } from '@/utils/getBaseUrl';
import axios from 'axios';

const baseURL = getBaseURL();

const instance = axios.create({
  baseURL,
});

export default instance;

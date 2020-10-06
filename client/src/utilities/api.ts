import axios from 'axios';
import { API_ADDRESS } from './CONFIG';

export default axios.create({
  baseURL: API_ADDRESS + '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

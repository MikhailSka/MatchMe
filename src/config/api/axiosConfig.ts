import axios from 'axios';

//import { getAccessToken } from '../security/getAssessToken';

const API_URL = 'http://localhost:8080';

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true
});
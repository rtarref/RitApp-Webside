import axios from 'axios';
import { getAccessToken } from './AuthService';

const BASE_URL = 'http://localhost:3333';
const options = {
  headers: {
    Authorization: `Bearer ${getAccessToken()}`
  }
};

export {getFoodData, getCelebrityData};

function getFoodData() {
  const url = `${BASE_URL}/api/jokes/food`;
  return axios.get(url).then(response => response.data);
}

function getCelebrityData() {
  const url = `${BASE_URL}/api/jokes/celebrity`;
  return axios.get(url, options).then(response => response.data);
}

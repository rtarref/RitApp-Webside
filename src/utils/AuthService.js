import { browserHistory } from 'react-router';
const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';

export function login(username, password) {
  if (username === 'mhernando@nakima.es' && password === '123qweQWE') {
    localStorage.setItem(ID_TOKEN_KEY, 'HAHAHA');
    localStorage.setItem(ACCESS_TOKEN_KEY, 'HAHAHA');
  }
  browserHistory.push('/surveillance');
}

export function logout() {
  clearIdToken();
  clearAccessToken();
  browserHistory.push('/');
}

export function requireAuth(replace) {
  if (!isLoggedIn()) {
    replace({pathname: '/'});
  }
}

export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY);
}

function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken;
}


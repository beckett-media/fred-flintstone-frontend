import axios from 'axios';
import { API_URL } from './initService';

async function loginUser(payload) {
  try {
    const { data } = await axios.post(API_URL + '/auth/login', payload);
    return data;
  } catch (error) {
    throw error.response.data;
  }
}

async function signOutUser() {
  try {
    let refreshToken = localStorage.getItem('refreshToken');
    refreshToken = JSON.parse(refreshToken);
    const payload = {
      refreshToken: refreshToken.token,
    };
    const { data } = await axios.post(API_URL + '/auth/logout', payload);
    return data;
  } catch (error) {
    throw error.response.data;
  }
}

const AuthService = {
  loginUser,
  signOutUser,
};

export default AuthService;

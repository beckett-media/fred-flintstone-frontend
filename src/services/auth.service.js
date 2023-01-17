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

const AuthService = {
  loginUser,
};

export default AuthService;

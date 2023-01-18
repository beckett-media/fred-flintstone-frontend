import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import OpenNotification from '../../components/notification.com';
import AuthService from '../../services/auth.service';
import { removeAuthTokens, saveUserTokensInLocalStorage } from './auth.utils';

// First, create the thunk
export const loginUser = createAsyncThunk(
  'auth/startLogin',
  async (payload, thunkAPI) => {
    const data = await AuthService.loginUser(payload);
    return data;
  }
);

export const logout = createAsyncThunk(
  'auth/startLogout',
  async (payload, thunkAPI) => {
    const data = await AuthService.signOutUser();
    return data;
  }
);

const initialState = {
  currentUser: null,
  error: null,
  isFetching: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state, _action) => {
        state.isFetching = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isFetching = false;
        state.error = '';
        state.currentUser = action.payload.user;
        saveUserTokensInLocalStorage(action.payload.tokens);
        OpenNotification({
          message: 'Success',
          type: 'success',
          description: "Login Successfully",
        });
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error.message;
        OpenNotification({
          message: 'Login Failed',
          type: 'error',
          description: action.error.message,
        });
      })
      .addCase(logout.pending, (state, _action) => {
        state.isFetching = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isFetching = false;
        state.error = '';
        state.currentUser = null;
        removeAuthTokens();
        OpenNotification({
          message: 'Success',
          type: 'success',
          description: "Logout Successfully",
        });
      })
      .addCase(logout.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error.message;
        OpenNotification({
          message: 'Logout Failed',
          type: 'error',
          description: action.error.message,
        });
      });
  },
});

export default authSlice.reducer;

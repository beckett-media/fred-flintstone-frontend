import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthService from '../../services/auth.service';
import { saveUserTokensInLocalStorage } from './auth.utils';

// First, create the thunk
export const loginUser = createAsyncThunk(
  'auth/startLogin',
  async (payload, thunkAPI) => {
    const data = await AuthService.loginUser(payload);
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
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;

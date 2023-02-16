import { createSlice } from '@reduxjs/toolkit';
import { register, login } from 'redux/auth/authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  //   isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.layload.token;
      state.isLoggedIn = true;
    },

    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.layload.token;
      state.isLoggedIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;
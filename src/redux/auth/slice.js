import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { apiLogin, apiLogout, apiRefreshUser, apiRegister } from './operations';

const INITIAL_STATE = {
  name: null,
  email: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,

  extraReducers: builder => {
    builder
      .addCase(apiRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
        state.name = action.payload.user.name;
        state.email = action.payload.user.email;
        state.token = action.payload.token;
      })
      .addCase(apiLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
        state.name = action.payload.user.name;
        state.email = action.payload.user.email;
        state.token = action.payload.token;
      })
      .addCase(apiRefreshUser.pending, state => {
        state.isRefreshing = true;
      })

      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.name = action.payload.name;
        state.email = action.payload.email;
      })
      .addCase(apiRefreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(apiLogout.fulfilled, () => {
        return INITIAL_STATE;
      })

      .addMatcher(
        isAnyOf(apiRegister.pending, apiLogin.pending, apiLogout.pending),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )

      .addMatcher(
        isAnyOf(apiRegister.rejected, apiLogin.rejected, apiLogout.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

// Редюсер слайсу
export const AuthReducer = authSlice.reducer;

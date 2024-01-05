import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import AuthService from "../services/auth.service"; 
import { setMessage } from "./message";

const user = JSON.parse(localStorage.getItem("user"));

export const login = createAsyncThunk(
  "login",
  async ({ phone, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(phone, password); 
      return { user: data };
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.error) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
); 

export const logout = createAsyncThunk("auth/logout", async () => { 
  await AuthService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user, registerStatus: false }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    //login
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    }); 

    //logout
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });
  },
});

const { reducer } = authSlice;
export default reducer;

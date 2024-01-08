import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";  
import userService from "../services/user.service";
import { setMessage } from "./message";

const initialState = {
  users: [],
  status: "idle",   
};


export const fetchUsers = createAsyncThunk("fetchUsers", async ( thunkAPI) => {
  try { 
    const data = await userService.getAllUsers();
    return data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.error) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {

    //getAllUsers
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = "failed";
    }); 

  }
})
 

const { reducer } = userSlice;
export default reducer;

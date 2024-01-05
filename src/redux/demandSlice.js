import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
import demandService from "../services/demand.service";
import { setMessage } from "./message";

const initialState = {
  demands: [],
  status: "idle", 

  updateStatus: false,
  
  statusDemand: "idle", 
  demand: {},
};

export const fetchDemands = createAsyncThunk("fetchDemands", async ( thunkAPI) => {
  try { 
    const data = await demandService.getAll();
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

export const fetchDemandById = createAsyncThunk("fetchDemandById", async (id, thunkAPI) => {
  try {
    const data = await demandService.findOne(id);
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

export const updateDemand = createAsyncThunk("updateDemand", async ({ id },
  thunkAPI) => {
  try {
    const data = await demandService.updateDemand(id);
    const message = data.message.toString();
    thunkAPI.dispatch(setMessage(message));
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

const demandSlice = createSlice({
  name: "demand",
  initialState,
  reducers: {
    clearDemand: (state) => {
      state.status = "idle";
      state.updateStatus = false;
    },
  },
  extraReducers: (builder) => {
    //getDeemands
    builder.addCase(fetchDemands.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchDemands.fulfilled, (state, action) => {
      state.demands = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchDemands.rejected, (state, action) => {
      state.status = "failed";
    }); 

    //getDemandsById
    builder.addCase(fetchDemandById.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchDemandById.fulfilled, (state, action) => {
      state.demand = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchDemandById.rejected, (state, action) => {
      state.status = "failed";
    }); 

    // update demand
    builder.addCase(updateDemand.fulfilled, (state, action) => {
      state.updateStatus = true;
    });
    builder.addCase(updateDemand.rejected, (state, action) => {
      state.updateStatus = false;
    });
  }
})

export const { clearDemand } = demandSlice.actions;

const { reducer } = demandSlice;
export default reducer;

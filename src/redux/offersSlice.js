import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
import offerService from "../services/offer.service";
import { setMessage } from "./message";

const initialState = {
  offers: [],
  status: "idle", 
  addStatus: false,
  offer: {},
};

export const addOffer = createAsyncThunk("addOffer", async ({ detail, total_price, demand_id, offer_url, end_date }, thunkAPI) => {
  try {
    const data = await offerService.create({ detail, total_price, demand_id,offer_url, end_date });
    const msg = data.message.toString();
    thunkAPI.dispatch(setMessage(msg));
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

export const fetchOffers = createAsyncThunk("fetchOffers", async ( thunkAPI) => {
  try { 
    const data = await offerService.getAll();
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


export const updateOffer = createAsyncThunk("updateOffer", async ({ id, end_date, sertificate_url },
  thunkAPI) => {
  try {
    const data = await offerService.updateOffer({ id, end_date, sertificate_url });
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

export const fetchOfferById = createAsyncThunk("fetchOfferById", async (id, thunkAPI) => {
  try {
    const data = await offerService.findOne(id);
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

const offerSlice = createSlice({
  name: "offer",
  initialState,
  reducers: {
    clearOffer: (state) => {
      state.status = "idle"
    },
  },
  extraReducers: (builder) => {

   // add offer
   builder.addCase(addOffer.fulfilled, (state, action) => {
    state.offers.push(action.payload);
    state.addStatus = true;
  });
  builder.addCase(addOffer.rejected, (state, action) => {
    state.addStatus = false;
  });

    //getOffers
    builder.addCase(fetchOffers.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchOffers.rejected, (state, action) => {
      state.status = "failed";
    }); 

    //getOfferById
    builder.addCase(fetchOfferById.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchOfferById.fulfilled, (state, action) => {
      state.offer = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchOfferById.rejected, (state, action) => {
      state.status = "failed";
    }); 

     // update offer
     builder.addCase(updateOffer.fulfilled, (state, action) => {
      state.addStatus = true;
    });
    builder.addCase(updateOffer.rejected, (state, action) => {
      state.addStatus = false;
    });
  }
})

export const { clearOffer } = offerSlice.actions;

const { reducer } = offerSlice;
export default reducer;

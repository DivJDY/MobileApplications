import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const createBooking = createAsyncThunk(
  "bookings/createBooking",
  async (bookingData: any) => {
    const response = await axios.post(`${API_BASE_URL}/bookings`, bookingData);
    return response.data;
  }
);

const bookingsSlice = createSlice({
  name: "bookings",
  initialState: { bookings: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBooking.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings.push(action.payload);
      })
      .addCase(createBooking.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default bookingsSlice.reducer;

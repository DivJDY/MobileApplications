import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const fetchServicesByLocation = createAsyncThunk(
  "services/fetchServicesByLocation",
  async (location: string) => {
    const response = await axios.get(
      `${API_BASE_URL}/services?location=${location}`
    );
    return response.data;
  }
);

const servicesSlice = createSlice({
  name: "services",
  initialState: { services: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServicesByLocation.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServicesByLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.services = action.payload;
      })
      .addCase(fetchServicesByLocation.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default servicesSlice.reducer;

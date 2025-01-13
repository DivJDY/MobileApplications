import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

// export const fetchCategories = createAsyncThunk(
//   "categories/fetchCategories",
//   async () => {
//     const response = await axios.get(`${API_BASE_URL}/categories`);
//     console.log("response==", response);
//     return response.data;
//   }
// );

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories`);
      console.log("response==", response);
      return response.data;
    } catch (error) {
      console.error("Error fetching categories", error);
      throw error;
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: { categories: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        console.log("action==", action);
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default categoriesSlice.reducer;

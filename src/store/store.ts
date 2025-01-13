import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import servicesReducer from "./slices/servicesSlice";
import bookingsReducer from "./slices/bookingSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    services: servicesReducer,
    bookings: bookingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

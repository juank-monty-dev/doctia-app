import { configureStore } from "@reduxjs/toolkit";

import { doctiaSlice } from "./doctia/doctiaSlice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    doctia: doctiaSlice.reducer,
  },
});

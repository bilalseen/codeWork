import { configureStore } from "@reduxjs/toolkit";

import favoriteJobReducer from "./jobSlice";

const store = configureStore({
  reducer: {
    favoriteJob: favoriteJobReducer,
  },
});

export default store;

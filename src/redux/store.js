import { configureStore } from "@reduxjs/toolkit";

import favoriteJobReducer from "./jobSlice";
import pageReducer from "./pageSlice";

const store = configureStore({
  reducer: {
    favoriteJob: favoriteJobReducer,
    page: pageReducer,
  },
});

export default store;

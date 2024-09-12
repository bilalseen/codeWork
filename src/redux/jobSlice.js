import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteJob: [],
};

const favoriteJobSlice = createSlice({
  name: "favoriteJob",
  initialState,
  reducers: {
    addFavoriteJob: (state, action) => {
      state.push(action.payload);
    },
    removeFavoriteJob: (state, action) => {
      return state.filter((job) => job.id !== action.payload.id);
    },
  },
});

export const { addFavoriteJob, removeFavoriteJob } = favoriteJobSlice.actions;
export default favoriteJobSlice.reducer;

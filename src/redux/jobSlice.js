import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteJob: [],
};

const favoriteJobSlice = createSlice({
  name: "favoriteJob",
  initialState,
  reducers: {
    addFavoriteJob: (state, action) => {
      state.favoriteJob.push(action.payload);
    },
    removeFavoriteJob: (state, action) => {
      state.favoriteJob = state.favoriteJob.filter(
        (job) => job.id !== action.payload.id
      );
    },
  },
});

export const { addFavoriteJob, removeFavoriteJob } = favoriteJobSlice.actions;
export default favoriteJobSlice.reducer;

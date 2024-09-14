const { createSlice } = require("@reduxjs/toolkit");

const pageSlice = createSlice({
  name: "page",
  initialState: {
    currentPage: 1,
    totalPage: 0,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalPage: (state, action) => {
      state.totalPage = action.payload;
    },
  },
});

export const { setPage, setTotalPage } = pageSlice.actions;
export default pageSlice.reducer;

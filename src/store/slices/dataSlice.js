import { createSlice } from "@reduxjs/toolkit";
import { fetchAllData } from "../action/dataSlice.action";

const state = {
  allData: {},
  loading: false,
  navbar: [],
  banner: [],
  footer: [],
  error: "",
};

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: state,
  reducers: {
    setNavbar: (state, action) => {
      return { ...state, navbar: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllData.pending, (state, action) => {
        return { ...state, loading: true };
      })
      .addCase(fetchAllData.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          allData: action.payload,
        };
      })
      .addCase(fetchAllData.rejected, (state, action) => {
        return { ...state, loading: false, error: "cant fetch all data" };
      });
  },
});

export const { setNavbar } = dataSlice.actions;

export default dataSlice.reducer;

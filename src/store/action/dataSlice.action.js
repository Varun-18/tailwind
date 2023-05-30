import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../contentful/client";
import { setNavbar } from "../slices/dataSlice";

/*** ASYNC CALLS ***/

export const fetchAllData = createAsyncThunk(
  "dataSlice/fetchData",
  async () => {
    try {
      const { items } = await client.getEntries({
        content_type: "cms",
        select: "fields",
        include: 3,
      });
      //   console.log(items[0].fields);
      return items[0].fields;
    } catch (error) {
      console.log(error);
    }
  }
);

/*** SYNC CALLS ***/

export const addNavbarData = (data) => (dispatch) => {
    try {
    dispatch(setNavbar(data));
  } catch (error) {
    console.log(error);
  }
};

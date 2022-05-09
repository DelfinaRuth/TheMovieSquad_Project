import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const userSearch = createAsyncThunk("search", (movieInput) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=7571866020be0fc96f4cbd335eaa5117&query=${movieInput}`
    )
    .then((res) => res.data);
});

const userSearchReducer = createReducer({},
  {
    [userSearch.fulfilled]: (state, action) => action.payload,
  }
);

export default userSearchReducer;

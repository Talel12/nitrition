import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  Articles: [],
  status: "idle",
  error: null,
};

export const fetchArticle = createAsyncThunk(
  "Articles/fetchArticles",
  async () => {
    const response = await axios.get("http://localhost:5000/article");
    return response.data;
  }
);

export const createArticle = createAsyncThunk(
  "article/createArticle",
  async (article) => {
    const response = await axios.post("http://localhost:5000/article", article);
    return response.data;
  }
);

const articleSlices = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticle.pending, (state) => {
        state.status = "Pending";
      })
      .addCase(fetchArticle.fulfilled, (state, action) => {
        state.status = "Successful";
        state.Articles = action.payload;
      })
      .addCase(fetchArticle.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(createArticle.pending, (state) => {
        state.status = "Pending";
      })
      .addCase(createArticle.fulfilled, (state, action) => {
        state.status = "Successful";
        // state.Articles = action.payload;
      })
      .addCase(createArticle.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default articleSlices.reducer;

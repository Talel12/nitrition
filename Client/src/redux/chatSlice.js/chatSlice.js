import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  chatUsers: [],
  loading: false,
  error: false,
};

export const chatSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.chatUsers.push(action.payload.data);
    },
  },
});

export const { saveUser } = chatSlice.actions;

export default chatSlice.reducer;

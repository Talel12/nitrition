import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let response = await axios.post(
      "http://localhost:5000/user/register",
      user
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const userlogi = createAsyncThunk("user/logi", async (user) => {
  try {
    let response = await axios.post("http://localhost:5000/user/login", user);
    return await response.data;
  } catch (error) {
    console.log(error);
  }
});
export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let response = await axios.get("http://localhost:5000/user/current", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return await response.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteuser = createAsyncThunk("user/delete", async (id) => {
  try {
    let result = await axios.delete(`http://localhost:5000/user/${id}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

export const getAllUsers = createAsyncThunk("user/getall", async () => {
  try {
    let result = await axios.get(`http://localhost:5000/user/all`);
    return await result.data;
  } catch (error) {
    console.log(error);
  }
});

export const edituser = createAsyncThunk(
  "user/edit",
  async ({ id, newuser }) => {
    try {
      console.log(id);
      console.log(newuser);
      let result = axios.put(`http://localhost:5000/user/${id}`, newuser);
      return result.data;
    } catch (error) {
      console.log("edituser: error=", error);
      throw error;
    }
  }
);

const initialState = {
  user: null,
  status: null,
  userList: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [userRegister.pending]: (state) => {
      state.status = "pending";
    },
    [userRegister.fulfilled]: (state, action) => {
      state.status = "successsss";
      state.user = action.payload.newUserToken;
      localStorage.setItem("token", action.payload.data.token);
    },
    [userRegister.rejected]: (state) => {
      state.status = "fail";
    },
    [userlogi.pending]: (state) => {
      state.status = "pending";
    },
    [userlogi.fulfilled]: (state, action) => {
      state.status = "successsss";
      state.user = action.payload?.user;
      localStorage.setItem("token", action.payload.token);
    },
    [userlogi.rejected]: (state) => {
      state.status = "fail";
    },
    [userCurrent.pending]: (state) => {
      state.status = "pending";
    },
    [userCurrent.fulfilled]: (state, action) => {
      state.status = "successsss";
      state.user = action.payload?.user;
    },
    [userCurrent.rejected]: (state) => {
      state.status = "fail";
    },
    [deleteuser.pending]: (state) => {
      state.status = "pending";
    },
    [deleteuser.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deleteuser.rejected]: (state) => {
      state.status = "fail";
    },
    [edituser.pending]: (state) => {
      state.status = "pending";
    },
    [edituser.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [edituser.rejected]: (state) => {
      state.status = "fail";
    },
    [getAllUsers.pending]: (state) => {
      state.status = "pending";
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.status = "success";
      state.userList = action.payload.user;
    },
    [getAllUsers.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;

export default userSlice.reducer;

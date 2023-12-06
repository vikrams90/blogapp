import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import { userService } from "./userService";

const userExist = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: userExist
    ? userExist
    : {
        name: "",
        email: "",
        password: "",
        token: null,
      },
  isLoggedIn: userExist ? true : false,
  isError: false,
  isSucces: false,
  isLoading: false,
  errorMsg : ""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = {}
      state.isLoggedIn = false;
      userService.logOut()
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
        state.isSucces = false;
        state.isLoggedIn = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSucces = true;
        state.isLoggedIn = true;
        state.user = {...action.payload};
      })
      .addCase(registerUser.rejected, (state,action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSucces = false;
        state.isLoggedIn = false;
        state.errorMsg = action.error.message
      })
      .addCase(loginUser.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
        state.isSucces = false;
        state.isLoggedIn = false;
      }).addCase(loginUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSucces = true;
        state.isLoggedIn = true;
        state.user = {...action.payload}
      }).addCase(loginUser.rejected, (state,action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSucces = false;
        state.isLoggedIn = false;
        state.errorMsg = action.error.message
      });
  },
});

export default userSlice.reducer;
export const {logOut} = userSlice.actions
export const registerUser = createAsyncThunk(
  "AUTH/REGISTER",
  async (formdata) => {
    try {
      return await userService.register(formdata)
    } catch (error) {
      console.log(error.response.data)
      throw error.response.data.msg
    }
  }
);

export const loginUser = createAsyncThunk("AUTH/LOGIN", async (formdata) => {
  try {
    return await userService.login(formdata)
  } catch (error) {
    throw error.response.data.msg
  }
});

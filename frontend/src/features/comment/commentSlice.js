import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commentService } from "./commentService";

const initialState = {
  usercomments: [],
  isError: false,
  isPending: false,
  isSuccess: false,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComment.pending, (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
      })
      .addCase(getComment.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.usercomments = action.payload;
      })
      .addCase(getComment.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        console.log(action.error);
      })
      .addCase(postComment.pending, (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.usercomments.push(action.payload);
      })
      .addCase(postComment.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        console.log(action.error);
      });
  },
});

export default commentSlice.reducer;

export const postComment = createAsyncThunk(
  "POST/COMMENT",
  async (formdata, ThunkApi) => {
    try {
      const token = ThunkApi.getState().users.user.token;
      const data = await commentService.postComment(formdata, token);
      return await data;
    } catch (error) {
      console.log(ThunkApi.rejectWithValue);
      throw error;
    }
  }
);

export const getComment = createAsyncThunk(
  "GET/COMMENT",
  async (id, ThunkApi) => {
    console.log(id);
    try {
      const token = ThunkApi.getState().users.user.token;
      const data = await commentService.getComment(id, token);
      console.log(data);
      return await data;
    } catch (error) {
      console.log(ThunkApi.rejectWithValue);
      throw error;
    }
  }
);

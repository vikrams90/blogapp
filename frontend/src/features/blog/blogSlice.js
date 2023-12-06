import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { blogService } from "./blogService";
import { logOut } from "../user/userSlice";

const dark = JSON.parse(localStorage.getItem("dark"));

const initialState = {
  blog: [
    {
      author: "",
      description: "",
      user: "",
      _id: "",
      title: "",
    },
  ],
  edit: { blog: {}, isEdit: false },
  isLoading: false,
  isSuccess: false,
  isError: false,
  isDeleted: false,
  errorMsg: "",
  darkMode: dark ? true : false,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    editBlog: (state, action) => {
      state.edit.isEdit = true;
      state.edit.blog = action.payload;
    },
    darkModeOn: (state, action) => {
      state.darkMode = !state.darkMode;
      if (state.darkMode) {
        localStorage.setItem("dark", JSON.stringify({ darkMode: true }));
      } else {
        localStorage.removeItem("dark");
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBlog.pending, (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.blog.push(action.payload);
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.errorMsg = action.error.message;
      })
      .addCase(getBlog.pending, (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
      })
      .addCase(getBlog.fulfilled, (state) => {})
      .addCase(getBlog.rejected, (state) => {})
      .addCase(getAllBlog.pending, (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
      })
      .addCase(getAllBlog.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        //   console.log(action.payload)
        state.blog = action.payload;
      })
      .addCase(getAllBlog.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.errorMsg = action.error.message;
        console.log(action.error.message);
       
      })
      .addCase(deleteBlog.pending, (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        // console.log(action.payload)
        state.isDeleted = action.payload.isDeleted;
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.errorMsg = action.error.message;
      })
      .addCase(updateBlog.pending, (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        // console.log(action.payload)
        state.edit.isEdit = false;
        state.edit.blog = {};
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.errorMsg = action.error.message;
      });
  },
});

export const createBlog = createAsyncThunk("BLOG/CREATE", async (formdata) => {
  try {
    return await blogService.postBlog(formdata.data, formdata.token);
  } catch (error) {
    console.log(error);
    console.log(error.response.data.msg);
    throw error.response.data.msg;
  }
});

export const getBlog = createAsyncThunk("BLOG/GET", () => {});

export const getAllBlog = createAsyncThunk("BLOG/ALL", async (_, ThunkApi) => {
  try {
    const token = ThunkApi.getState().users.user.token;
    return await blogService.getBlog(token);
  } catch (error) {
    if (error.response.data.msg.includes("user not authorized initiating")) {
      // localStorage.removeItem("user");
      ThunkApi.dispatch(logOut())
    }
    throw error.response.data.msg;
  }
});

export const deleteBlog = createAsyncThunk(
  "BLOG/DELETE",
  async (id, ThunkApi) => {
    try {
      console.log("id: ", id);
      const token = ThunkApi.getState().users.user.token;
      const data = await blogService.deleteMyBlog(token, id);
      return await data;
    } catch (error) {
      console.log(error.response.data.msg);
      throw error.response.data.msg;
    }
  }
);

export const updateBlog = createAsyncThunk(
  "BLOG/UPDATE",
  async (formdata, ThunkApi) => {
    try {
      const token = ThunkApi.getState().users.user.token;
      const data = await blogService.updateMyBlog(token, formdata);
      return await data;
    } catch (error) {
      console.log(error.response.data.msg);
      throw error.response.data.msg;
    }
  }
);

export default blogSlice.reducer;
export const { editBlog, darkModeOn } = blogSlice.actions;

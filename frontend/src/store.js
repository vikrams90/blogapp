import { configureStore } from "@reduxjs/toolkit"
import users from "./features/user/userSlice"
import blogs from "./features/blog/blogSlice"
import comments from "./features/comment/commentSlice"

export const store = configureStore({
    reducer: {
        users,
        blogs,
        comments,
    }
})
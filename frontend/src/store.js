import { configureStore } from "@reduxjs/toolkit"
import users from "./features/user/userSlice"
import blogs from "./features/blog/blogSlice"

export const store = configureStore({
    reducer: {
        users,
        blogs,
    }
})
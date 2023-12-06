import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlog } from "../features/blog/blogSlice";
import SingleBlog from "./SingleBlog";

const AllBlog = () => {
    const dispatch = useDispatch();
    
  const { blog } = useSelector((state) => state.blogs);
  useEffect(() => {
    dispatch(getAllBlog());
  }, []);

  if (!blog || blog.length === 0) {
    return (
      <ul className='w-full h-screen bg-white flex flex-col gap-6 px-8 py-6 dark:bg-[#212121]'>
        <h1 className="text-white">No Blog To Show Create Some First</h1>
       </ul>
    )
  }

  return (
    
    <ul className='w-full min-h-screen scrollbar bg-[#ececec] flex flex-col gap-6 dark:bg-[#212121] px-8 py-6'>
     {blog.map(item=><SingleBlog key={item._id} blog={item} />)}
      </ul>
  );
};

export default AllBlog;

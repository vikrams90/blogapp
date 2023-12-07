import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBlog, editBlog, getAllBlog, updateBlog } from "../features/blog/blogSlice";

const ViewBlog = () => {

  useEffect(() => {
    console.log("mount")
    dispatch(getAllBlog())
  },[])


  const params = useParams();
  const dispatch = useDispatch()
  const { blog } = useSelector((state) => state.blogs);
  const navigate = useNavigate()
  const data = blog.filter((item) => item._id === params.id)[0];
  
 

  const handleDelete = async() => {
    await dispatch(deleteBlog(data._id))
    navigate("/blog/all")
  }

  const handleEdit = async() => {
    await dispatch(editBlog(data))
    navigate("/blog")
  }

  if (!data || data.length === 0) {
    return <section className="min-h-screen text-black dark:text-white bg-slate-100 dark:bg-zinc-800 w-full flex flex-col items-center py-6 px-28 text-center gap-3">
      
    </section>
  }


  return <section className="min-h-screen text-black dark:text-white bg-slate-100 dark:bg-zinc-800 w-full flex flex-col items-center sm:py-6 py-12 px-8 sm:px-28 text-center gap-3"> 
  <h1 className="font-semibold sm:text-2xl">{data.title}</h1>
  <div className="flex gap-3 flex-wrap justify-center items-center text-xs">
  <h2 className="bg-yellow-200 dark:bg-slate-600 px-2 py-1">{data.author}</h2>
  <h3 className="bg-yellow-300 dark:bg-stone-700 px-2 py-1">Date : { data.createdAt.split("T")[0]}</h3>
  </div>
  <p className="text-center" dangerouslySetInnerHTML={{ __html: data.article }}></p>
  <div className="fixed bottom-3 flex gap-3 justify-center bg-inherit">
    <button className="bg-orange-300 dark:bg-cyan-800 px-2 py-1" onClick={handleEdit}>edit blog</button>
    <button className="bg-red-400 dark:bg-red-700 px-2 py-1" onClick={handleDelete}>delete blog</button>
  </div>
</section>;
 
};

export default ViewBlog;

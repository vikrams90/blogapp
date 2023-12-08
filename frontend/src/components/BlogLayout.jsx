import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { FaBars, FaX } from "react-icons/fa6";
import MenuBar from "./MenuBar";

const BlogLayout = () => {
  const [open,setOpen] = useState(false)
  const { darkMode } = useSelector(state => state.blogs)
  return (
    <section data-mode={darkMode?"dark":"light"} className='flex w-screen relative'>
      <nav className='hidden min-h-screen dark:bg-black sm:block sm:w-2/12'>
        <Navbar
        ></Navbar>
      </nav>
      <header onClick={()=>{setOpen(!open)}} className="block relative left-0 top-0 sm:hidden text-black dark:text-white">
        <nav className="fixed top-3 left-3 z-[200]">{ open?<FaX/>:<FaBars />}</nav>
        <div className="fixed top-0 z-[100]">{open?<MenuBar/>:<></>}</div>
      </header>
      <main className='w-full sm:w-10/12 dark:bg-slate-800 sm:dark:bg-inherit dark:text-white text-black sm:text-black h-screen sm:bg-inherit'>
        <Outlet />
      </main>

      <NavLink to={-1} className={"hidden sm:block fixed z-20 bg-orange-400 px-2 py-1 right-8 top-3 text-gray-50 text-sm"}>
        go back
      </NavLink>
    </section>
  );
};

export default BlogLayout;

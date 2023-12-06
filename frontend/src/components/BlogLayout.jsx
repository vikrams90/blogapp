import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const BlogLayout = () => {
  const { darkMode } = useSelector(state => state.blogs)
  return (
    <section data-mode={darkMode?"dark":"light"} className='flex w-screen relative'>
      <nav className='w-2/12'>
        <Navbar
        ></Navbar>
      </nav>
      <main className='w-10/12 '>
        <Outlet />
      </main>

      <NavLink to={-1} className={"fixed z-20 bg-orange-400 px-2 py-1 right-8 top-3 text-gray-50 text-sm"}>
        go back
      </NavLink>
    </section>
  );
};

export default BlogLayout;

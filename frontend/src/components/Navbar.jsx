import React from "react";
import {FaUser} from "react-icons/fa6"
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../features/user/userSlice";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  
  const { user } = useSelector(state => state.users)
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(logOut())
  }

  return (
    <div className="dark:bg-black dark:text-white bg-zinc-100 sticky top-0 text-black min-h-screen flex flex-col items-center text-center justify-between py-8 px">
      <div>
        <div className="flex justify-center text-4xl"><FaUser/></div>
        <ul className="flex flex-col gap-6 pt-5 ">
          <li>{ user.name ? user.name : "Guest"}</li>
          <li><NavLink to={"/blog"}>Home</NavLink></li>
          <li><NavLink to={"/blog/about"}>About</NavLink></li>
          <li><NavLink to={"/blog/contact"}>Contact</NavLink></li>
          <li><NavLink to={"/blog/help"}>Help</NavLink></li>
          <li><NavLink to={"/blog"} >Create Blog</NavLink></li>
          <li><NavLink to={ "/blog/all" } >All Blogs</NavLink></li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <NavLink to={"/blog/setting"}>Setting</NavLink>
        <button onClick={handleLogOut}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkModeOn } from "../features/blog/blogSlice";

const SettingLayout = () => {
  const { darkMode } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  console.log(darkMode);
  const handleClick = async () => {
    await dispatch(darkModeOn());
  };
  return (
    <div className='p-5'>
      <label  class='switch'>
        <input type='checkbox' />
        <span onClick={handleClick} class='slider'></span>
      </label>
    </div>
  );
};

export default SettingLayout;

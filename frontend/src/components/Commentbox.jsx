import React from "react";

const Commentbox = ({ com }) => {
  return (
    <>
      <li
        key={com._id}
        className='card-shadow dark:card-shadow-dark w-4/5 relative  overflow-hidden bg-[#e8e8e8] dark:bg-[#212121] px-5 py-3 pb-10 text-[#181d56] dark:text-[#ffffff] text-sm'
      >
        <h1 className='truncate'>{com.userName}</h1>
        {/* <h2>{ blog.author}</h2> */}
        <p className='desc'>{com.comment}</p>
      </li>
    </>
  );
};

export default Commentbox;

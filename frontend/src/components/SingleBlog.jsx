import React from 'react'
import { NavLink } from 'react-router-dom'

const SingleBlog = ({ blog }) => {
  return (
    <li className='card-shadow dark:card-shadow-dark w-4/5 relative  overflow-hidden bg-[#e8e8e8] dark:bg-[#212121] px-5 py-3 pb-10 text-[#181d56] dark:text-[#ffffff] text-sm'>
          <h1 className='truncate'>{ blog.title}</h1>
          <h2>{ blog.author}</h2>
          <p className='desc' dangerouslySetInnerHTML={{__html:blog.article}}></p>
          <NavLink to={`/blog/all/${blog._id}`} className={"absolute text-[10px] bottom-1 right-2"} >view blog</NavLink>
    </li>
  )
}

export default SingleBlog

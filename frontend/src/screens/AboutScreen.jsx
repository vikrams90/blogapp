// src/components/About.js

import React from "react";

const AboutScreen = () => {
  return (
    <div className='bg-gray-100 min-h-screen dark:bg-stone-950 sm:p-8 py-10 px-8 shadow-md'>
      <h2 className='text-2xl font-semibold mb-4 dark:text-white'>About My Blog</h2>
      <p className='text-gray-600 dark:text-white'>
        Welcome to blogger! Here, you can share your thoughts, <br/> experiences, and
        insights on various topics. Feel free to explore and engage with the
              content.

              This app is created by vikram bhadoria. in this app only authentic user can create, view, edit and remove blogs.
              features
                  
              <ul className="list-disc">
              <li>auto logout after 30min inactivity</li>
              <li>create, view and edit blog</li>
              <li>admin panel coming soon</li>
              <li>comments coming soon</li>
              <li>React Routing version 6</li>
              <li>Redux</li>
              <li>Node js and express js</li>
              <li>Mongo Db</li>
              <li>private routes</li>
              <li>token based authentication</li>
              <li>password hashing</li>
              <li>user setting with name and email changing option</li>
              <li>light and dark mode</li>
              </ul>
        
      </p>
    </div>
  );
};

export default AboutScreen;

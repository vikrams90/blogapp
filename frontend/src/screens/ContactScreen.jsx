import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaEnvelope} from 'react-icons/fa';
import { FaEarthAsia, FaFile, FaPhone } from 'react-icons/fa6';
import image from "../assets/download.jpeg"

const ContactScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center dark:bg-gray-800 bg-gray-100 min-h-screen">
      <div className=" w-10/12 sm:max-w-md sm:w-full p-8 bg-white dark:bg-gray-950 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Contact Me</h1>
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <img src={image} alt="Profile" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-medium dark:text-white text-gray-700">Vikram</h2>
            <p className="text-sm dark:text-white text-gray-500">Full Stack Web Developer</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2 mb-4">
          <div className="flex items-center space-x-2">
            <FaEnvelope className='dark:text-white'/>
            <a
              href="mailto:vikrambhadoriya90@gmail.com"
              className="text-gray-700 dark:text-white hover:underline"
            >
              vikrambhadoriya90@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone className='dark:text-white'/>
            <a
              href="tel:+919630039009"
              className="text-gray-700 dark:text-white hover:underline"
            >
              +91 9630039009
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaEarthAsia className='dark:text-white'/>
            <a
              href="https://www.tobecreated.com"
              className="text-gray-700 dark:text-white hover:underline"
            >
              https://www.tobecreated.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaFile className='dark:text-white'/>
            <a
              href="https://www.resume.com"
              className="text-gray-700 dark:text-white hover:underline"
            >
              https://www.resume.com
            </a>
          </div>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/vikram"
            className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com/vikram"
            className="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center text-white hover:bg-blue-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/vikram"
            className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-blue-800"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.github.com/vikram"
            className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-900"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;

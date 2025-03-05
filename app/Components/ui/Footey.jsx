import React from 'react';
import { FaGithub, FaFacebook, FaGoogle } from 'react-icons/fa';

function Footey() {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <a href="#">
              <img
                className="w-auto h-20"
                src="/assets/unnamed.png"
                alt="DreamForce Logo"
              />
            </a>

            <div className="flex flex-wrap justify-center mt-6 -mx-4">
              <a
                href="/"
                className="mx-4 text-lg text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="Home"
              >
                Home
              </a>
              <a
                href="/"
                className="mx-4 text-lg text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="About"
              >
                About
              </a>
              <a
                href="/"
                className="mx-4 text-lg text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="Teams"
              >
                Teams
              </a>
              <a
                href="/"
                className="mx-4 text-lg text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="Privacy"
              >
                Privacy
              </a>
              <a
                href="/contact"
                className="mx-4 text-lg text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="Cookies"
              >
                Contact
              </a>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-lg text-gray-500 dark:text-gray-300">
              © Copyright 2024. All Rights Reserved.
            </p>
            <div className="flex -mx-2">
              <a
                href="#"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Reddit"
              >
                <FaGithub size={30} className="text-gray-700 hover:text-black" />
              </a>
              <a
                href="#"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Facebook"
              >
                 <FaFacebook size={30} className="text-blue-600 hover:text-blue-800" />
              </a>
              <a
                href="#"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Github"
              >
               <FaGoogle size={30} className="text-red-500 hover:text-red-700" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footey;

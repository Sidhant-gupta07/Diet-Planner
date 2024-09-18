
import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp"; 
import Profile from "../Profile/Profile";

const Navbar = () => {
  const [showForm, setShowForm] = useState(null); // null means no form is shown
  const [createProfile, setCreateProfile] = useState(null); // null means no form is shown

  const handleSignInClick = () => {
    setShowForm('signin');
    setCreateProfile(null); // Hide the profile form when showing sign-in form
  };

  const handleSignUpClick = () => {
    setShowForm('signup');
    setCreateProfile(null); // Hide the profile form when showing sign-up form
  };

  const handleCreateProfile = () => {
    setCreateProfile('profile');
    setShowForm(null); // Hide the sign-in/signup forms when showing profile form
  };

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="fixed bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center z-50">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-white">Diet Planner</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900 text-white">Dashboard</a>
            <a className="mr-5 hover:text-gray-900 text-white">About Us</a>
            <a className="mr-5 hover:text-gray-900 text-white">Jobs</a>
            <a className="mr-5 hover:text-gray-900 text-white">Contact</a>
          </nav>
          <div className="flex items-center">
            <button
              onClick={handleCreateProfile}
              className="mr-2 text-white"
            >
              <CgProfile size={30}/>
            </button>
            <button 
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-3"
              onClick={handleSignInClick}
            >
              Sign-In
            </button>
            <button 
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              onClick={handleSignUpClick}
            >
              Sign-Up
            </button>
          </div>
        </div>
      </header>

      {/* Conditionally render the form based on which button is clicked */}
      {showForm === 'signin' && <SignIn activeForm={showForm} />}
      {showForm === 'signup' && <SignUp activeForm={showForm} />}
      {createProfile === 'profile' && <Profile />}
    </>
  );
}

export default Navbar;

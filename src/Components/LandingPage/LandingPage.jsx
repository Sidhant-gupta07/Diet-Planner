import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import SignIn from "../SignIn/SignIn"; // Import the SignIn component here
import Profile from "../Profile/Profile"

const LandingPage = () => {
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
        <div className="fixed bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
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
            <span className="ml-3 text-xl">Diet Planner</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Dashboard</a>
            <a className="mr-5 hover:text-gray-900">About Us</a>
            <a className="mr-5 hover:text-gray-900">Jobs</a>
            <a className="mr-5 hover:text-gray-900">Contact</a>
          </nav>
          <div>
            <button
            onClick={handleCreateProfile}
            className="mr-2 text-white">
              <CgProfile size={30}/>
              </button>
          </div>
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
      </header>

      {/* Hero Section */}
      <section className="text-gray-600 body-font">
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 container mx-auto flex px-5 py-24 md:flex-row flex-col items-center min-h-screen">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <span className="font-mono">Smart</span> <span className="font-thin">Personal</span>
              <br className="hidden lg:inline-block" /> <span className="font-mono">Diet Planner!</span>
            </h1>
            <p className="mb-8 leading-relaxed text-pretty font-serif">
              Welcome to your personalized diet planner., <br /> Enter your
              dietary preferences, track your meals, <br />
              and achieve your fitness goals with ease.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={handleSignUpClick}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://www.kolorshealthcare.com/blog/wp-content/uploads/2019/09/vegan-diet-Banner.jpg"
            />
          </div>
        </div>
      </section>
 {/* Conditionally render the form based on which button is clicked */}
 {showForm ? (
        <SignIn activeForm={showForm} />
      ) : createProfile ? (
        <Profile activeForm={createProfile} />
      ) : null}
    </>
  );
};

export default LandingPage;

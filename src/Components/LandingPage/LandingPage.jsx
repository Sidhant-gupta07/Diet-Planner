import React, { useState } from "react";
import Navbar from "../Navbar/Navbar"; // Ensure the path is correct
import SignUp from "../SignUp/SignUp"; // Ensure the path is correct

const LandingPage = () => {
  const [showSignUp, setShowSignUp] = useState(false); // For showing the Sign-Up form modal

  // Handler to open the Sign-Up form modal
  const handleSignUpClick = () => {
    setShowSignUp(true); // Show the modal
  };

  // Handler to close the modal
  const closeModal = () => {
    setShowSignUp(false);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="text-gray-600 body-font">
        <div className="fixed bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 container mx-auto flex px-5 py-24 md:flex-row flex-col items-center min-h-screen">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <span className="font-mono">Smart</span> <span className="font-thin">Personal</span>
              <br className="hidden lg:inline-block" /> <span className="font-mono">Diet Planner!</span>
            </h1>
            <p className="mb-8 leading-relaxed text-pretty font-serif">
              Welcome to your personalized diet planner. <br /> Enter your
              dietary preferences, track your meals, <br />
              and achieve your fitness goals with ease.
            </p>
            <div className="flex justify-center">
              <button
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
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
              src="https://png.pngtree.com/png-clipart/20221014/original/pngtree-diet-plan-science-healthy-meal-png-image_8683814.png"
            />
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {showSignUp && (
        <>
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40" onClick={closeModal}></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mx-auto relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
              >
                X
              </button>

              {/* Sign-Up Form Component */}
              <SignUp onClose={closeModal} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LandingPage;

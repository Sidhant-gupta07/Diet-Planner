import React, { useState } from 'react';

const SignUp = ({ activeForm }) => {
  const [currentForm, setCurrentForm] = useState(activeForm);

  const handleFormChange = (form) => {
    setCurrentForm(form);
  };

  const handleClose = () => {
    setCurrentForm(null); // This will close the modal
  };

  return (
    <>
      {currentForm && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleClose} // Clicking outside the form will close it
          ></div>

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
              {/* Close Button */}
              <button 
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={handleClose}
              >
                ✕
              </button>

              {/* Sign Up Section */}
              {currentForm === 'signup' && (
                <div id="signup-form">
                  <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
                  <form>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-purple-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200"
                    >
                      Sign Up
                    </button>
                    <p className="text-center text-gray-600 mt-6">
                      Already have an account?{' '}
                      <button
                        type="button"
                        className="text-purple-500 hover:underline"
                        onClick={() => handleFormChange('signin')}
                      >
                        Log In
                      </button>
                    </p>
                  </form>
                </div>
              )}

              {/* SignIn Form */}
              {currentForm === 'signin' && (
                <div id="signin-form">
                  <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">Log In</h2>
                  <form>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-purple-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200"
                    >
                      Log In
                    </button>
                    <p className="text-center text-gray-600 mt-6">
                      <button
                        type="button"
                        className="text-purple-500 hover:underline"
                        onClick={() => handleFormChange('forgot-password')}
                      >
                        Forgot Password?
                      </button>
                    </p>
                    <p className="text-center text-gray-600 mt-6">
                      Don’t have an account?{' '}
                      <button
                        type="button"
                        className="text-purple-500 hover:underline"
                        onClick={() => handleFormChange('signup')}
                      >
                        Sign Up
                      </button>
                    </p>
                  </form>
                </div>
              )}

              {/* Forgot Password Form */}
      {currentForm === 'forgot-password' && (
        <div id="forgot-password-form">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">Forgot Password</h2>
          <form>
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200"
            >
              Reset Password
            </button>
            <p className="text-center text-gray-600 mt-6">
              Remember your password?{' '}
              <button
                type="button"
                className="text-purple-500 hover:underline"
                onClick={() => handleFormChange('signin')}
              >
                Log In
              </button>
            </p>
          </form>
        </div>
      )}

            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SignUp;

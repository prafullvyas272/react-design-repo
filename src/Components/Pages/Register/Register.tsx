import React from "react";
import Footer from "../../Footer/Footer";
export default function Register() {
  return (
    <>
     
     <div className="grid grid-cols-1 lg:grid-cols-2 ">
      <div>
      <p className="m-5 flex logo-text">
        <img src="/assets/arrow.png" className="w-5 h-5 mr-3" />
        Go Back
      </p>
      </div>
      <div className="flex flex-col justify-center px-6 py-12 bg-gray-50 w-full relative">
        </div>
     </div>
     
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-white">
        {/* First Section */}

        <div className="flex flex-col justify-center px-6 py-12 mb-10 lg:px-20 order-2">
          <div className="mx-auto w-full max-w-sm">
            
            <img
              alt="Your Company"
              src="/assets/logo.svg"
              className="h-10 w-auto mb-6"
            />
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Register
            </h2>
            <p className="mt-2 text-gray-600 text-sm">
              Get the medical advice you need—quickly and easily. Start chatting
              with a doctor from the comfort of your home.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5 mt-6"
            >
              <div className="relative">
                <span className="absolute register-icons inset-y-0 left-0 pl-3 flex items-center pointer-events-none border-r border-gray-300 mr-2">
                  <img
                    src="/assets/email.svg"
                    alt="email"
                    className="w-5 h-5"
                  />
                </span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  autoComplete="email"
                  className="pl-14 py-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                />
              </div>

              <div className="relative">
                <span className="absolute register-icons inset-y-0 left-0 pl-3 flex items-center pointer-events-none border-r border-gray-300 mr-2">
                  <img src="/assets/lock.svg" alt="lock" className="w-5 h-5" />
                </span>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Create Password"
                  autoComplete="new-password"
                  className="pl-14 py-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                />
              </div>

              <div className="relative">
                <span className="absolute register-icons inset-y-0 left-0 pl-3 flex items-center pointer-events-none border-r border-gray-300 mr-2">
                  <img src="/assets/lock.svg" alt="lock" className="w-5 h-5" />
                </span>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  placeholder="Confirm Password"
                  autoComplete="new-password"
                  className="pl-14 py-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                />
              </div>

              <div className="text-sm text-gray-600">
                <label className="inline-flex items-center">
                  <input
                    id="tnc"
                    name="tnc"
                    type="checkbox"
                    className="mr-2"
                    required
                  />
                  I accept{" "}
                  <p
                    href="#"
                    className="ml-1 font-semibold text-gray-700 underline "
                  >
                    Terms of Service and Privacy Policy
                  </p>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                >
                  Create Account
                </button>
              </div>
            </form>

            <p className="mt-4 text-center text-sm text-gray-500">
              Already have an account?
              <a
                href="/login"
                className="ml-1 font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Login
              </a>
            </p>
          </div>
          <div className="register-footer-div">
            <Footer />
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col justify-center px-6 py-12 bg-gray-50 w-full relative order-1 lg:order-2">
          {/* Text Content */}
          <div className="w-full lg:w-2/3 mx-auto">
            <h2 className="font-semibold text-2xl lg:text-3xl text-left">
              Join Thousands of <br />
              Clinicians Using <br />
              <span className="special-text">Medikal.ai</span>
            </h2>
            <p className="mt-2 text-gray-600 text-left">
              Sign up in seconds. Save hours every day.
            </p>
          </div>

          {/* Image at bottom, aligned right */}
          <div className="w-full mt-6 flex justify-end">
            <img
              alt="Mobile preview"
              src="/assets/mobiles.png"
              className="w-auto h-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

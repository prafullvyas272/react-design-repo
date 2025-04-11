import React from "react";
import Footer from "../../Footer/Footer";
export default function Register() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-white">
      {/* First Section */}
      <div className="flex flex-col justify-center px-6 py-12 lg:px-20">
        <div className="mx-auto w-full max-w-sm">
          <img
            alt="Your Company"
            src="/src/assets/logo.svg"
            className="h-10 w-auto mb-6"
          />
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Register
          </h2>
          <p className="mt-2 text-gray-600 text-sm">
            Get the medical advice you need—quickly and easily. Start chatting with a doctor from the comfort of your home.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5 mt-6">
            {/* Email */}
            <div className="relative">
              <span className="absolute register-icons inset-y-0 left-0 pl-3 flex items-center pointer-events-none border-r border-gray-300 mr-2">
                <img src="/src/assets/email.svg" alt="email" className="w-5 h-5" />
              </span>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                autoComplete="email"
                className="pl-10 py-2 block w-full rounded-md bg-white border border-gray-300 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>

            {/* Create Password */}
            <div className="relative">
              <span className="absolute register-icons inset-y-0 left-0 pl-3 flex items-center pointer-events-none border-r border-gray-300 mr-2">
                <img src="/src/assets/lock.svg" alt="lock" className="w-5 h-5" />
              </span>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Create Password"
                autoComplete="new-password"
                className="pl-10 py-2 block w-full rounded-md bg-white border border-gray-300 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <span className="absolute register-icons inset-y-0 left-0 pl-3 flex items-center pointer-events-none border-r border-gray-300 mr-2">
                <img src="/src/assets/lock.svg" alt="lock" className="w-5 h-5" />
              </span>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                placeholder="Confirm Password"
                autoComplete="new-password"
                className="pl-10 py-2 block w-full rounded-md bg-white border border-gray-300 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>

            {/* Terms & Conditions */}
            <div className="text-sm text-gray-600">
              <label className="inline-flex items-center">
                <input
                  id="tnc"
                  name="tnc"
                  type="checkbox"
                  className="mr-2"
                  required
                />
                I accept <a href="#" className="ml-1 font-semibold text-indigo-600 hover:underline">Terms of Service and Privacy Policy</a>
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                Create Account
              </button>
            </div>
          </form>

          {/* Already have an account */}
          <p className="mt-4 text-center text-sm text-gray-500">
            Already have an account?
            <a href="/login" className="ml-1 font-semibold text-indigo-600 hover:text-indigo-500">
              Login
            </a>
          </p>
          
        </div>

      </div>

      {/* Second Section */}
      <div className="flex flex-col justify-center px-6 py-12 bg-gray-50 lg:px-20">
        <div className="mx-auto w-full max-w-sm text-center">
          <img
            alt="Your Company"
            src="/src/assets/logo.svg"
            className="h-10 w-auto mb-6 mx-auto"
          />
          <h2 className="text-2xl font-semibold text-gray-900">
            Join Thousands of Clinicians Using <span className="text-indigo-600">Medikal.ai</span>
          </h2>
          <p className="mt-2 text-gray-600">
            Sign up in seconds. Save hours every day.
          </p>

          <img
            alt="Mobile preview"
            src="/src/assets/mobiles.png"
            className="mt-8 w-full max-w-xs mx-auto md:max-w-sm"
          />
        </div>
      </div>
      <Footer />

    </div>
  );
}

import React from "react";

export default function Login() {
  return (
    <>
      {/* Update your template: <html class="h-full bg-white"> <body class="h-full"> */}
      <p className="m-5 flex logo-text">
          <img src="/assets/arrow.png" className="w-5 h-5 mr-3" />
          Go Back
        </p>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
            <img
              alt="Your Company"
              src="/assets/logo.svg"
              className=" h-10 w-auto"
            />
          </div>
          <h2 className="mt-5 text-2xl font-bold tracking-tight text-gray-900">
            Log In
          </h2>
          <p className="mt-2">
            Access your notes, manage patients, and stay on top of your
            documentation—securely and efficiently.
          </p>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="relative">
              <div className="mt-2">
                <span className="absolute login-icons inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <img src="/assets/email.svg" />
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
            </div>

            <div>
              <div className="relative mt-2">
                <span className="absolute login-icons inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <img src="/assets/lock.svg" />
                </span>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  autoComplete="current-password"
                  className="pl-14 block py-2 border-l-2 w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>
            <div className="text-sm">
              <a
                href="reset-password"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot Password?
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-4 text-center text-sm text-gray-500">
            Don't have an account?  
            <a
              href="register"
              className="font-semibold pl-1 text-indigo-600 hover:text-indigo-500"
            >
               Create Account
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

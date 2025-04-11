import React from "react";

export default function ResetPassword() {
  return (
    <>
      {/* Update your template: <html class="h-full bg-white"> <body class="h-full"> */}
      <p className="m-5 flex logo-text go-back">

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
          <h2 className="mt-5 text-2xl font-bold tracking-tight text-gray-900" style={{ fontWeight: 500 }}>
            Reset Your Password
          </h2>
          <p className="mt-2" style={{ fontWeight: 300 }}>
            Enter your email address below and we’ll send you a secure link to
            reset your password.
          </p>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
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
              <button
                type="submit"
                style={{ fontWeight: 600 }}
                className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
              >
                Send Reset Password Instructions
              </button>
            </div>
          </form>

          <p className="mt-4 text-center text-sm text-gray-500" style={{ fontWeight: 300 }}>
            Remembered your password?
            <a
              href="login"
              className="font-semibold pl-1 text-indigo-600 hover:text-indigo-500"
              style={{ fontWeight: 500 }}>
              Log in
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

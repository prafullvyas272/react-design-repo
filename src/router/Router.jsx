import React from "react";
import { Routes, Route } from "react-router-dom";
// import Login from "../Components/Pages/EmailVerify/Login"; // This might not be needed here
import LoginPage from "../Components/Pages/Login/Login";
import ResetPassword from "../Components/Pages/ResetPassword/ResetPassword";
import Register from "../Components/Pages/Register/Register";

const Router = () => {
  return (
    <Routes>
      {/* Example routes within Layout */}
      {/* <Route path="/" element={<div>Home Page</div>} />
      <Route path="/about" element={<div>About Page</div>} />
      <Route path="/services" element={<div>Services Page</div>} />
      <Route path="/contact" element={<div>Contact Page</div>} /> */}
      {/* Optionally, redirect /login to root if needed */}
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/register" element={<Register />} />
      
    </Routes>
  );
};

export default Router;
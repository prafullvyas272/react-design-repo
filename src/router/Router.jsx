import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Pages/EmailVerify/Login"; // This might not be needed here

const Router = () => {
  return (
    <Routes>
      {/* Example routes within Layout */}
      <Route path="/" element={<div>Home Page</div>} />
      <Route path="/about" element={<div>About Page</div>} />
      <Route path="/services" element={<div>Services Page</div>} />
      <Route path="/contact" element={<div>Contact Page</div>} />
      {/* Optionally, redirect /login to root if needed */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
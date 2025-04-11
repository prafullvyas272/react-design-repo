import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Pages/EmailVerify/Login";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes> 
        {/* Main App Routes - With Header/Footer */}
        <Route path="/*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
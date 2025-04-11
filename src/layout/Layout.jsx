import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Router from "../router/Router";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Router />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
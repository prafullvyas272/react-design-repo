import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Router from "../router/Router";

const Layout = () => {
  const location = useLocation();

  const hideFooterOnRoutes = ["/register"];
  const shouldShowFooter = !hideFooterOnRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <main >
        
        <Router />
      </main>

      {shouldShowFooter && <Footer />}
    </div>
  );
};

export default Layout;

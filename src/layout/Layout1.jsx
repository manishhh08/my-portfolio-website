import React from "react";
import Footer from "../components/Footer";
import Navigation_menu from "../components/Navigation_menu";
import { Outlet } from "react-router";

const Layout1 = (props) => {
  return (
    <>
      <Navigation_menu />
      {/* {props.children} */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout1;

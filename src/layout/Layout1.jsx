import Footer from "../components/Footer";
import Navigation_menu from "../components/Navigation_menu";
import { Outlet } from "react-router-dom";

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

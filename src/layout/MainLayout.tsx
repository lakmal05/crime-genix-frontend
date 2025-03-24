import React, { Fragment } from "react";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

interface MainLayoutProps {
  children: JSX.Element;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <NavBar />
      <main>{children}</main> <Footer />
    </Fragment>
  );
};

export default MainLayout;

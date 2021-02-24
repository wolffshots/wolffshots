import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Navigation from "../Navigation/Navigation";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

interface Props {
  children: React.ReactNode;
}
const Layout = (props: Props) => {
  return (
    <div>
      <ThemeToggle />
      <Breadcrumbs />
      <Navigation />
      {props.children}
    </div>
  );
};

export default Layout;

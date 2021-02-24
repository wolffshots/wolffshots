import React from "react";
import Navigation from "../Navigation/Navigation";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

interface Props {
  children: React.ReactNode;
}
const Layout = (props: Props) => {
  return (
    <div>
      <ThemeToggle />
      <Navigation />
      {props.children}
    </div>
  );
};

export default Layout;

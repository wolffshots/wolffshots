import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

interface Props {
  children: React.ReactNode;
}
const Layout = (props: Props) => {
  // todo add nav in here
  return (
    <div>
      <ThemeToggle />
      {props.children}
    </div>
  );
};

export default Layout;

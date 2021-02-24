import React from "react";

interface Props {
  children: React.ReactNode;
}
const Layout = (props: Props) => {
    // todo add nav in here
  return <div>{props.children}</div>;
};

export default Layout;

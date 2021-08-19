import React from "react";
import Navigation from "../Navigation/Navigation";

interface Props {
  children: React.ReactNode;
  title?: string;
}
/**
 * a container to wrap the whole page's content in which contains the title and navbar, sets the page height equal to the viewport height and handles default text colours
 * @param chilren the components and content to render on the page
 * @param title the title to display in a `<title>` tag (renders in the tab heading in most browsers)
 * @author wolffshots
 */
const Layout = (props: Props) => {
  return (
    <div className="items-center dark:text-gray-100 text-gray-900">
      <title>wolffshots | {props.title ?? "Web-interface"}</title>
      <Navigation />
      <div className="flex justify-center p-6">{props.children}</div>
    </div>
  );
};

export default Layout;

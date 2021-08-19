import React, { useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import NavigationItem from "./NavigationItem";
// import Logo from "../../logo.svg";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

/**
 * the main navigation component of the app.
 * this handles the differences in styling for mobile as well as theme toggling and active styling.
 * @author wolffshots
 */
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<Boolean>(false);
  return (
    <div
      className={`dark:bg-gray-100 dark:text-blue-900 w-full shadow-md bg-gray-800 text-blue-200 text-lg`}
    >
      <header className="flex flex-wrap flex-row justify-between md:items-center md:space-x-4 md:py-2 py-6 px-6 relative">
        <NavigationItem name="wolffshots">
        </NavigationItem>
        <button
          className="inline-block md:hidden w-8 h-8 bg-gray-200 text-gray-600 p-1"
          onClick={() => {
            setMobileMenuOpen((prev) => !prev);
          }}
        >
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <nav
          className={`dark:bg-gray-100 dark:text-blue-900 bg-gray-800 text-blue-200  absolute md:relative top-16 left-0 md:top-0 z-20 flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0 ${
            mobileMenuOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <ThemeToggle />
          <div className="flex flex-col md:flex-row">
            <NavigationItem name={`Home`} />
            <NavigationItem route={`/about`} name={`About`} />
            <NavigationItem route={`/projects`} name={`Projects`} />
            <NavigationItem route={`/experience`} name={`Experience`} />
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="m-2 flex hover:underline">
              <a href={`mailto:wolffshots@pm.me`}>Contact</a>
            </div>
          </div>
        </nav>
      </header>
      <Breadcrumbs />
    </div>
  );
};

export default Navigation;

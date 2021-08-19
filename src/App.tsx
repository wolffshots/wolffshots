import { ReactElement, useEffect } from "react";
import Routes from "./pages/Routes";

import "./styles/tailwind.css";

const App = (): ReactElement => {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <div className="font-sans">
      <main className="bg-white dark:bg-gray-800 min-h-screen">
        <Routes />
      </main>
    </div>
  );
};

export default App;

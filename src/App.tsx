import "./App.css";
import { ReactElement, useEffect } from "react";
import Routes from "./pages/Routes";

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
    <div className="App">
      <header className="bg-white dark:bg-gray-800 dark:text-white App-header">
        <Routes />
      </header>
    </div>
  );
};

export default App;

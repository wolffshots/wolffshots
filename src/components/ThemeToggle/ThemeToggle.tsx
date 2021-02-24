// import React from "react";

const ThemeToggle = () => {
  const clickHandler = () => {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      // Whenever the user explicitly chooses light mode
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      // Whenever the user explicitly chooses dark mode
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <button onClick={clickHandler} className={"absolute top-0 right-0 m-5 dark:right-100 text-base"}>
      switch theme
    </button>
  );
};

export default ThemeToggle;

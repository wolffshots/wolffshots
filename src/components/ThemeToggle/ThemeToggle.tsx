/**
 * a button to manage the state of and do the toggling for dark mode. adds the dark class to the root html and stores the user preference in localstorage.
 * @author wolffshots
 */
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
    <button onClick={clickHandler} className={"text-base"}>
      toggle darkmode
    </button>
  );
};

export default ThemeToggle;

import { ReactElement, useEffect } from "react";
import { useAppDispatch } from "./hooks";
import Routes from "./pages/Routes";
import { setReadme, startLoading, stopLoading } from "./store";
import "./styles/tailwind.css";

const App = (): ReactElement => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(`fetching readme`);
    dispatch(startLoading());
    fetch(
      `https://raw.githubusercontent.com/wolffshots/wolffshots/main/README.md`
    )
      .then(async (res) => dispatch(setReadme(await res.text())))
      .catch((err) => console.error(err))
      .finally(() => dispatch(stopLoading()));
  }, [dispatch]);
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
      <header className="bg-white dark:bg-gray-800 min-h-screen">
        <Routes />
      </header>
    </div>
  );
};

export default App;

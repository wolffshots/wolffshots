import { ReactElement, useEffect } from "react";
import Routes from "./pages/Routes";

import "./styles/tailwind.css";

import { fetchExperience, fetchProjects, fetchReadme } from "./api";
import { useQueryClient } from "react-query";

const App = (): ReactElement => {
  const queryClient = useQueryClient();
  queryClient.prefetchQuery("readme", () => fetchReadme());
  queryClient.prefetchQuery("experience", () => fetchExperience());
  queryClient.prefetchQuery("projects", () => fetchProjects());
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

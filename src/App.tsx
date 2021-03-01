import { ReactElement, useEffect } from "react";
import Routes from "./pages/Routes";

// // Firebase App (the core Firebase SDK) is always required and must be listed first
// import firebase from "firebase/app";
// // If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// // import * as firebase from "firebase/app"

// // If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// // Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyDrqBD-a4mwRnXF7yNlJ-8_b_PCbzBVbo0",
//   authDomain: "easyiotsystems-25107.firebaseapp.com",
//   databaseURL:
//     "https://easyiotsystems-25107-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "easyiotsystems-25107",
//   storageBucket: "easyiotsystems-25107.appspot.com",
//   messagingSenderId: "969797719562",
//   appId: "1:969797719562:web:5a542dbe2b2f97d2f871f3",
//   measurementId: "G-3FGDNJB2NH",
// };
const App = (): ReactElement => {
  // useEffect(() => {
  //   try {
  //     firebase.initializeApp(firebaseConfig);
  //   } catch (error) {
  //     console.log(`failed to initialise firebase: ${error}`);
  //     console.log(
  //       `this can usually be ignored if it's only coming up when things are re-saved`
  //     );
  //   }
  // }, []);
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
    <div className="App font-sans">
      <header className="bg-white dark:bg-gray-800 min-h-screen">
        <Routes />
      </header>
    </div>
  );
};

export default App;

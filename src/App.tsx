import "./App.css";
import { ReactElement } from "react";
import Routes from "./pages/Routes";

const App = (): ReactElement => {
  return (
    <div className="App">
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
};

export default App;

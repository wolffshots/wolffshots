import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./About/About";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import Photography from "./Projects/Photography/Photography";

import FourOhFour from "./FourOhFour/FourOhFour";

import Template from "./Template/Template";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/projects" component={Projects} exact />
      <Route path="/experience" component={Experience} exact />
      <Route path="/projects/photography" component={Photography} exact />
      <Route path="/template-for-page" component={Template} exact />
      <Route component={FourOhFour} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

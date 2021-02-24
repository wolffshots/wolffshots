import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./About/About";
import Home from "./Home/Home";
import Encoder from "./Projects/Encoder/Encoder";
import Projects from "./Projects/Projects";

const Routes = () => (
  <BrowserRouter>
    <Route path="/" component={Home} exact />
    <Route path="/about" component={About} exact />
    {/* projects */}
    <Route path="/projects" component={Projects} exact />
    <Route path="/projects/encoder" component={Encoder} exact />
  </BrowserRouter>
);

export default Routes;

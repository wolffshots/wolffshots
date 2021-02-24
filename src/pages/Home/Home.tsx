import logo from "../../logo.svg";
import Layout from "../../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </Layout>
  );
};

export default About;

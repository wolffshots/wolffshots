import Layout from "../../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <p>Placeholder paragraph for explanation about me</p>
      <a
        className="dark:text-blue-300 text-green-500"
        href="https://www.github.com/wolffshots"
        target="_blank"
        rel="noopener noreferrer"
      >
        View my GitHub
      </a>
    </Layout>
  );
};

export default About;

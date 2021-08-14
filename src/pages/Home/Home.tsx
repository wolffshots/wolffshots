import Layout from "../../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div
        className={`text-center min-h-1/2 flex flex-col justify-around ${
          window.location.pathname !== "/" ? "pt-2" : "pt-14"
        }`}
      >
        <p>
          This serves as my portfolio site which pulls data from my GitHub
          profile
        </p>
        <ul className="grid gap-4 grid-cols-1">
          <li>
            <a
              className="dark:text-blue-300 text-green-500"
              href="https://www.github.com/wolffshots"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my GitHub
            </a>
          </li>
          <li>
            <a
              className="dark:text-blue-300 text-green-500"
              href="www.linkedin.com/in/wolffshots"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default About;

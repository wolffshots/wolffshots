import Layout from "../../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div
        className={`text-center min-h-3/4 flex flex-col justify-around items-center ${
          window.location.pathname !== "/" ? "pt-2" : "pt-14"
        }`}
      >
        <h1 style={{ fontWeight: 800, fontSize: "2.25em" }}>wolffshots</h1>
        <p>
          This serves as my portfolio site <br />
          which pulls data from my GitHub profile
        </p>
        <p>
          Check my links below or <br />
          my details from the pages above
        </p>
        <ul className="grid gap-4 grid-cols-1">
          <li>
            <a
              className="dark:text-blue-300 text-indigo-700 hover:underline"
              href="https://www.github.com/wolffshots"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my GitHub
            </a>
          </li>
          <li>
            <a
              className="dark:text-blue-300 text-indigo-700 hover:underline"
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

import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const Projects = () => {
  return (
    <Layout>
      <p>projects</p>
      <Link to="projects/encoder" className="m-2">
        film encoder
      </Link>
    </Layout>
  );
};

export default Projects;

import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout/Layout";
import gfm from "remark-gfm";
import { fetchProjects } from "../../api";
import { useQuery } from "react-query";

const Projects = () => {
  const projects = useQuery("projects", () => fetchProjects());
  return (
    <Layout>
      {projects.isLoading ? (
        <p>loading...</p>
      ) : (
        projects.data && (
          <div className="prose dark:prose-dark">
            <ReactMarkdown children={projects.data} remarkPlugins={[gfm]} />
          </div>
        )
      )}
    </Layout>
  );
};

export default Projects;

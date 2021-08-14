import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout/Layout";
import { useAppSelector } from "../../hooks";
import gfm from "remark-gfm";

const Projects = () => {
  const data = useAppSelector((state) => state.data);
  return (
    <Layout>
      {data.loading ? (
        data.projects
      ) : (
        <div className="prose dark:prose-dark">
          <ReactMarkdown children={data.projects} remarkPlugins={[gfm]} />
        </div>
      )}
    </Layout>
  );
};

export default Projects;

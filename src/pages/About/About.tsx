import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout/Layout";
import gfm from "remark-gfm";
import { useQuery } from "react-query";
import { fetchReadme } from "../../api";

const About = () => {
  const readme = useQuery("readme", () => fetchReadme());
  return (
    <Layout>
      {readme.isLoading ? (
        <p>loading...</p>
      ) : (
        readme.data && (
          <div className="prose dark:prose-dark">
            <ReactMarkdown children={readme.data} remarkPlugins={[gfm]} />
          </div>
        )
      )}
    </Layout>
  );
};

export default About;

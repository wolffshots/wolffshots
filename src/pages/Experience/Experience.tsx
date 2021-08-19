import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout/Layout";
import gfm from "remark-gfm";
import { fetchExperience } from "../../api";
import { useQuery } from "react-query";

const Experience = () => {
  const experience = useQuery("experience", () => fetchExperience());
  return (
    <Layout>
      {experience.isLoading ? (
        <p>loading...</p>
      ) : (
        experience.data && (
          <div className="prose dark:prose-dark">
            <ReactMarkdown children={experience.data} remarkPlugins={[gfm]} />
          </div>
        )
      )}
    </Layout>
  );
};

export default Experience;

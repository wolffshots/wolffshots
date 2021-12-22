import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout/Layout";
import gfm from "remark-gfm";
import { fetchEducation } from "../../api";
import { useQuery } from "react-query";

const Education = () => {
  const education = useQuery("education", () => fetchEducation());
  return (
    <Layout>
      {education.isLoading ? (
        <p>loading...</p>
      ) : (
        education.data && (
          <div className="prose dark:prose-dark">
            <ReactMarkdown children={education.data} remarkPlugins={[gfm]} />
          </div>
        )
      )}
    </Layout>
  );
};

export default Education;

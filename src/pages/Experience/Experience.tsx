import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout/Layout";
import { useAppSelector } from "../../hooks";
import gfm from "remark-gfm";

const Experience = () => {
  const data = useAppSelector((state) => state.data);
  return (
    <Layout>
      {data.loading ? (
        data.experience
      ) : (
        <div className="prose dark:prose-dark">
          <ReactMarkdown children={data.experience} remarkPlugins={[gfm]} />
        </div>
      )}
    </Layout>
  );
};

export default Experience;

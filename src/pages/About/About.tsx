import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout/Layout";
import gfm from "remark-gfm";
import { useAppSelector } from "../../hooks";

const About = () => {
  const data = useAppSelector((state) => state.data);
  return (
    <Layout>
      {data.loading ? (
        data.readme
      ) : (
        <div className="prose">
          <ReactMarkdown children={data.readme} remarkPlugins={[gfm]} />
        </div>
      )}
    </Layout>
  );
};

export default About;

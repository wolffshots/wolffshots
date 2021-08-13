import Layout from "../../components/Layout/Layout";

const FourOhFour = () => {
  return (
    <Layout title="404 Not Found">
      <div className="mt-10 grid grid-cols-1 gap-8" style={{minHeight:"50px"}}>
        <h2 className="m-auto w-max text-2xl">Four Oh Four</h2>
        <div>
        <p className="m-auto w-max">Sorry, I couldn't find the page you were looking for.</p>
        <p className="m-auto w-max">If you think this was an error please open an issue at <a href="https://github.com/wolffshots/wolffshots/issues" className="text-purple-700 dark:text-purple-400">wolffshots/issues</a></p>
        </div>
      </div>
    </Layout>
  );
};

export default FourOhFour;

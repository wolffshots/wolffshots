import { useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {}
const Breadcrumbs = (props: Props) => {
  let current = "";
  const breadcrumbs = window.location.pathname.split("#")[0].split("/");
  useEffect(() => {
    console.log(current);
  }, [current]);
  return (
    <div className={`flex-row flex`}>
      {window.location.pathname !== "/"
        ? breadcrumbs.map(
            (crumb): JSX.Element => {
              current = current + "/" + crumb;
              return (
                <Link
                  to={current.replace(`//`, `/`)}
                  className="m-1"
                  key={crumb + Math.random().toString()}
                >
                  {">"} {crumb !== `` ? crumb : `home`}
                </Link>
              );
            }
          )
        : null}
      {/* split current location into parts and return links for each bit */}
    </div>
  );
};

export default Breadcrumbs;

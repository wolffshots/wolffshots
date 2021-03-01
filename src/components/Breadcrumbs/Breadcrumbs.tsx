import { Link } from "react-router-dom";
/**
 * A component to visualise where you are in the site and allows easy links to go back along the tree
 * @author wolffshots
 */
const Breadcrumbs = () => {
  let current = "";
  const breadcrumbs = window.location.pathname.split("#")[0].split("/");
  return (
    <div className={`flex-row flex text-base`}>
      {window.location.pathname !== "/" ? (
        <div className="m-3">
          {" "}
          {breadcrumbs.map(
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
          )}
        </div>
      ) : null}
      {/* split current location into parts and return links for each bit */}
    </div>
  );
};

export default Breadcrumbs;

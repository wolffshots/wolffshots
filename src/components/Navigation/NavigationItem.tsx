import { Link } from "react-router-dom";

interface Props {
  route?: string;
  name?: string;
  children?: React.ReactNode;
  activeStyle?: string;
}
/**
 * a stylised link to another page
 * @param route
 * @param name
 * @param children
 * @param activeStyle
 * @author wolffshots
 */
const NavigationItem = (props: Props) => {
  const activeStyle =
    props.activeStyle ?? "underline dark:text-blue-700 text-blue-300";
  return (
    <Link
      to={props.route ?? `/`}
      className={`m-2 flex hover:underline ${
        window.location.pathname.split(`/`)?.[1] ===
        props.route?.replace("/", "")
          ? activeStyle
          : ""
      }`}
    >
      {props.name ?? props.route ?? `home`}
      {props.children}
    </Link>
  );
};

export default NavigationItem;

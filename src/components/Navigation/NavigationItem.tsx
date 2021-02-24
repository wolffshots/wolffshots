import { Link } from "react-router-dom";

interface Props {
  route?: string;
  name?: string;
}
const NavigationItem = (props: Props) => {
  return (
    <Link to={props.route ?? ``} className="m-2">
      {props.name ?? props.route ?? `home`}
    </Link>
  );
};

export default NavigationItem;

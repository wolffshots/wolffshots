import NavigationItem from "./NavigationItem";

interface Props {}
const Navigation = (props: Props) => {
  return (
    <div className="absolute top-0 left-10">
      <NavigationItem />
      <NavigationItem route={`/about`} name={`about`}/>
      <NavigationItem route={`/projects`} name={`projects`}/>
    </div>
  );
};

export default Navigation;

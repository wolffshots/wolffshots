interface Props {
  text?: string;
  handler?: () => void;
}
/**
 * a stylised button with rounded corners and simple hover
 * @param text the text displayed on the button
 * @param handler the function that is called when the button is clicked
 * @author wolffshots
 */
const Button = (props: Props) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        if (props.handler) {
          props.handler();
        }
      }}
      className="text-xl justify-center p-2 rounded-md bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 text-white"
    >
      {props.text ?? "gimme some text"}
    </button>
  );
};

export default Button;

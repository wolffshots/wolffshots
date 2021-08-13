interface Props {
  placeholder?: string;
  changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
}
/**
 * stylised input component with focus events and some hover effects
 * @param placeholder the text to be shown in the input when it is initially rendered
 * @param changeHandler an optional function that gets called when the input changes - prevents default
 * @param required whether of not the input is required for the form to be submitted
 * @param error error message to show around component and change styling
 * @author wolffshots
 */
const Input = (props: Props) => {
  return (
    <input
      className={`shadow-md hover:shadow-lg text-lg text-gray-900 rounded-md p-1 m-1 w-full border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
      placeholder={props.placeholder ?? `...`}
      onChange={(e) => {
        e.preventDefault();
        if (props.changeHandler) {
          props.changeHandler(e);
        }
      }}
    />
  );
};

export default Input;

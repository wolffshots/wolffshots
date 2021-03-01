import { ReactNode } from "react";
/**
 * a ui component which takes in children and some styling as props to render it as a card to keep ui similar and easy to add in multiple places
 * this is one of the components that retains most of it's aesthetic in dark and light mode
 * props:
 * @param children the JSX elements to be rendered inside the card
 * @param heading the heading to be displayed in an h tag at the top of the card
 * @param headingNumber the level of the heading (1 being most important, 3 being least important)
 * @param className any other styling that you want to do to the wrapper
 * @param headingStyling styling you want to pass to the heading
 * @param bodyStyling styling you want to pass to the body/inner child wrapper
 * @param form whether the card represents a form or not
 * @author wolffshots
 */
const Card = (props: {
  children?: ReactNode;
  heading?: string;
  headingNumber?: number;
  className?: string;
  headingStyling?: string;
  bodyStyling?: string;
  form?: boolean;
}) => {
  // wrapper is just to make it simpler to implement different outer tags for cards such as the form tag as you see here
  const wrapperStyle = `m-2 p-3 px-4 shadow-sm hover:shadow-lg rounded-lg dark:bg-gray-100 bg-gray-300 text-gray-800 text-left ${props.className}`;
  const Wrapper = (innerProps: { children: ReactNode; form?: boolean }) => {
    if (innerProps.form) {
      return <form className={wrapperStyle}>{innerProps.children}</form>;
    } else {
      return <div className={wrapperStyle}>{innerProps.children}</div>;
    }
  };
  const defaultHeading = "text-center";
  return (
    <Wrapper>
      {props.heading ? (
        props.headingNumber ? (
          props.headingNumber === 2 ? (
            <h2
              className={
                props.headingStyling ? props.headingStyling : defaultHeading
              }
            >
              {props.heading}
            </h2>
          ) : props.headingNumber === 3 ? (
            <h3
              className={
                props.headingStyling ? props.headingStyling : defaultHeading
              }
            >
              {props.heading}
            </h3>
          ) : null
        ) : (
          <h1
            className={
              props.headingStyling ? props.headingStyling : defaultHeading
            }
          >
            {props.heading}
          </h1>
        )
      ) : null}
      <div
        className={`text-base ${props.bodyStyling ? props.bodyStyling : ""}`}
      >
        {props.children}
      </div>
    </Wrapper>
  );
};

export default Card;

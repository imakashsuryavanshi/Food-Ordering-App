export default function Button({ children, claasName, textOnly, ...props }) {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + claasName;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}

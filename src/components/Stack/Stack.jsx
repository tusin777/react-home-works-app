import "./Stack.css";

const Stack = ({
  children,
  direction = "column",
  gap = 16,
  align = "start",
  className,
}) => {
  return (
    <div
      style={{ gap: `${gap}px` }}
      className={`stack ${className || ""} ${
        (direction === "row" && "stack--row") ||
        (direction === "column" && "stack--column")
      } ${
        (align === "start" && "stack--align-start") ||
        (align === "center" && "stack--align-center") ||
        (align === "end" && "stack--align-end")
      }`}
    >
      {children}
    </div>
  );
};

export default Stack;

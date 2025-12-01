const Button = ({
  label = "Просто кнопка",
  onClick,
  btnStyles,
  btnStyles2,
}) => {
  if (!label) {
    console.warn("Проп 'label' не передан");
    return null; // React-friendly
  }

  const finalStyles = btnStyles || btnStyles2;

  return (
    <button onClick={onClick} style={finalStyles}>
      {label}
    </button>
  );
};

export default Button;

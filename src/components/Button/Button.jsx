import style from "./Button.module.css";

const Button = ({ children, variant = "primary" }) => {
  return (
    <div className={style["bottom-block"]}>
      <button className={`${style.button} ${style[variant]}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;

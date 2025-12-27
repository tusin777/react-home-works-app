import style from "./Card.module.css";

const Card = ({ title, children, size = "md", tone = "neutral" }) => {
  return (
    <div className={[style.card, style[size], style[tone]].join(" ")}>
      {title && <h2 className={style.title}>{title}</h2>}
      <p className={style.content}>{children}</p>
    </div>
  );
};

export default Card;

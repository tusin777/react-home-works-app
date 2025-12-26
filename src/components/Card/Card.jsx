import React from "react";
import "./Card.css";

const Card = ({ children, title, footer }) => {
  return (
    <div className="card">
      {title && <h2 className="card__title">{title}</h2>}
      {children && <div className="card__body">{children}</div>}
      {footer && <div className="card__footer">{footer}</div>}
    </div>
  );
};

export default Card;

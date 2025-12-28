import styles from "./ProductCard.module.css";

const ProductCard = ({
  title,
  price,
  description,
  badge,
  variant = "solid",
  className,
}) => {
  if (!title && !price) return null;

  const normalizedVariant = variant === "outline" ? "outline" : "solid";

  return (
    <section
      className={[styles.card, styles[normalizedVariant], className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>

      <div className={styles.price}>{price}</div>

      {description && <p className={styles.description}>{description}</p>}
    </section>
  );
};

export default ProductCard;

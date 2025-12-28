import styles from "./OrderStatusBadge.module.css";

const OrderStatusBadge = ({
  children,
  status = "new",
  size = "md",
  withDot = true,
}) => {
  if (children == null) return null;

  const allowedStatuses = ["new", "paid", "shipped", "cancelled"];
  const allowedSizes = ["sm", "md"];

  const normalizedStatus = allowedStatuses.includes(status) ? status : "new";
  const normalizedSize = allowedSizes.includes(size) ? size : "md";

  const className = [
    styles.badge,
    styles[normalizedSize],
    styles[normalizedStatus],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={className}>
      {withDot && <span className={styles["status-dot"]} />}
      {children}
    </span>
  );
};

export default OrderStatusBadge;

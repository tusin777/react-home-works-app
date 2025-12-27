import styles from "./Alert.module.css";

const Alert = ({ title, children, tone = "info", isOpen, onClose }) => {
  if (!isOpen) return null;

  const rootClassName = [styles.alert, styles[tone]].filter(Boolean).join(" ");

  return (
    <div className={rootClassName}>
      <div className={styles.header}>
        <div>
          {title && (
            <h2>
              <span className={styles["icon-box"]}>&bull;</span>
              {title}
            </h2>
          )}
        </div>

        <button type="button" onClick={onClose} className={styles.close}>
          X
        </button>
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Alert;

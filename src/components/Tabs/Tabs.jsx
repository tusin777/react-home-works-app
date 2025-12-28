import styles from "./Tabs.module.css";

const Tabs = ({ items, activeId, onChange, className }) => {
  if (!items || items.length === 0) return null;

  const rootClassName = [styles.tabs, styles["tabs-row"], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName}>
      {items.map(({ tabId, label, disabled = false }) => {
        const tabClassName = [
          styles.tab,
          tabId === activeId ? styles.active : null,
          disabled ? styles.disabled : null,
        ]
          .filter(Boolean)
          .join(" ");

        const handleClick = () => {
          if (disabled) return;
          onChange(tabId);
        };

        return (
          <button
            key={tabId}
            type="button"
            className={tabClassName}
            disabled={disabled}
            onClick={handleClick}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;

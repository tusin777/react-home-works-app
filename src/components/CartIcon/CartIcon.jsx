export default function CartIcon({ count }) {
  return (
    <div className="cart-icon">
      <span>🛒</span>
      {(count > 9 && <span className="badge">9+</span>) ||
        (count > 0 && <span className="badge">{count}</span>)}
    </div>
  );
}

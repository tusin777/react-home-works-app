import Button from "../components/Button";

export function HomePage({ click }) {
  return (
    <div>
      <h2>Домашняя страница</h2>
      <Button label="Клик через HomePage" onClick={click} />
    </div>
  );
}

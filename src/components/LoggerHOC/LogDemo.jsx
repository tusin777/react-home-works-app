import { withLogger } from "./withLogger";

function InfoCardA({ title, value }) {
  return (
    <p>
      {title}:{value}
    </p>
  );
}

function InfoCardB({ title, value }) {
  return (
    <p>
      {title}:{value}
    </p>
  );
}

const LoggedA = withLogger(InfoCardA, "A");

const LoggedB = withLogger(InfoCardB, "B");

export { LoggedA, LoggedB };

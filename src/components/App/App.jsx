import ControlledNameForm from "../ControlledNameForm/ControlledNameForm";
import MixedContactForm from "../MixedContactForm/MixedContactForm";
import OrderForm from "../OrderForm/OrderForm";
import UncontrolledNameForm from "../UncontrolledNameForm/UncontrolledNameForm";
import ValidatedMixedForm from "../ValidatedMixedForm/ValidatedMixedForm";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>React Homework Template</h1>
      <p>Здесь будет домашнее задание к соответствующему уроку.</p>

      <ControlledNameForm />
      <UncontrolledNameForm />
      <MixedContactForm />
      <ValidatedMixedForm />
      <OrderForm />
    </div>
  );
}

export default App;

// src/components/StepsList.jsx
import { Component } from "react";

class StepsList extends Component {
  state = {
    steps: ["Шаг 1", "Шаг 2", "Шаг 3"],
  };

  clearSteps = () => {
    this.setState({ steps: [] });
  };

  render() {
    return (
      <>
        <ul>
          {this.state.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        <button onClick={this.clearSteps}>Очистить список</button>
      </>
    );
  }
}

export default StepsList;

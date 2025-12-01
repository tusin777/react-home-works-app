// src/components/Timer.jsx
import { Component } from "react";

class Timer extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState((prevState) => {
      if (prevState.count >= 10) return prevState;
      return { count: prevState.count + 1 };
    });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <p>Текущее значение: {this.state.count}</p>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.reset}>Сброс</button>
      </div>
    );
  }
}

export default Timer;

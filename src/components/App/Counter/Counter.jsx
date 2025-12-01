import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
    this.setState((prev) => ({ count: prev.count + 1 }));
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  incrementTen = () => {
    for (let i = 0; i < 10; i++) {
      this.setState((prev) => ({ count: prev.count + 1 }));
    }
  };

  render() {
    return (
      <>
        <p>Счётчик: {this.state.count}</p>
        <button onClick={this.increment}>Прибавить</button>
        <button onClick={this.incrementTen}>+10</button>
      </>
    );
  }
}

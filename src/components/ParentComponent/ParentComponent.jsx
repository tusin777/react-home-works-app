import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { counts: [0, 0, 0] };
  }

  increment = (index) => {
    this.setState((prev) => {
      const newCounts = [...prev.counts];
      newCounts[index] += 1;
      return { counts: newCounts };
    });
  };

  decrement = (index) => {
    this.setState((prev) => {
      const newCounts = [...prev.counts];
      newCounts[index] -= 1;
      return { counts: newCounts };
    });
  };

  reset = () => {
    this.setState((prev) => {
      const newCounts = [...prev.counts];
      return { counts: newCounts.map(() => 0) };
    });
  };

  render() {
    return (
      <>
        {this.state.counts.map((count, index) => (
          <ChildComponent
            key={index}
            count={count}
            onIncrement={() => this.increment(index)}
            decrement={() => this.decrement(index)}
            label={index + 1}
          />
        ))}
        <button onClick={this.reset}>Сбросить все счётчики</button>
      </>
    );
  }
}

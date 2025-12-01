import React, { Component } from "react";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Вася", age: 22 };
  }

  updateName = () => {
    this.setState({ name: "Маша" });
  };

  updataAge = () => {
    this.setState((prev) => ({ age: prev.age + 1 }));
  };

  reset = () => {
    this.setState({ name: "Вася", age: 22 });
  };

  render() {
    return (
      <div>
        <p>
          Имя:{this.state.name} Возраст:{this.state.age}
        </p>
        <button onClick={this.updateName}>Изменить имя</button>
        <button onClick={this.updataAge}>Изменить возраст</button>
        <button onClick={this.reset}>Сброс</button>
      </div>
    );
  }
}

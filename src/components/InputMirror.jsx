// src/components/InputMirror.jsx
import { Component } from "react";

class InputMirror extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    if (value.length <= 20) {
      this.setState({ text: value });
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <p>Вы ввели: {this.state.text}</p>
      </div>
    );
  }
}

export default InputMirror;

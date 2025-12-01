// src/components/InfoBlock.jsx
import { Component } from "react";

class InfoBlock extends Component {
  message = "Привет из классового компонента!";
  render() {
    return (
      <>
        <h2>Это мой первый самостоятельный классовый компонент</h2>
        <p>{this.message}</p>
      </>
    );
  }
}

export default InfoBlock;

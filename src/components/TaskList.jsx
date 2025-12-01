import { Component } from "react";

class TaskList extends Component {
  state = { tasks: [], newTask: "" };

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  removeTask = (index) => {
    this.setState({
      tasks: this.state.tasks.filter((_, i) => i !== index),
    });
  };

  addTask = () => {
    const { tasks, newTask } = this.state;

    if (newTask.trim()) {
      this.setState({
        tasks: [...tasks, newTask],
        newTask: "",
      });
    }

    console.log(tasks);
  };

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.newTask}
          onChange={this.handleInputChange}
        />

        <button onClick={this.addTask}>Добавить задачу</button>

        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => this.removeTask(index)}>Удалить</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default TaskList;

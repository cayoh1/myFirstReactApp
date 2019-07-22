import React from "react";
import ReactDOM from "react-dom";

class Todo extends React.Component {
  render() {
    return this.props.completed ? (
      <li style={{ listStyleType: "none" }}>
        {" "}
        <button onClick={() => this.props.xClick(this.props.index)}>
          {" "}
          X{" "}
        </button>{" "}
        <strike> {this.props.task} </strike>{" "}
        <input type="checkbox" id="isComplete" name="isComplete" onChange = {() => this.props.toggleClick()} checked/>{" "}
      </li>
    ) : (
      <li style={{ listStyleType: "none" }}>
        {" "}
        <button onClick={() => this.props.xClick(this.props.index)}>
          {" "}
          X{" "}
        </button>{" "}
        {this.props.task}{" "}
        <input type="checkbox" id="isComplete" name="isComplete" onChange = {() => this.props.toggleClick()}/>{" "}
      </li>
    );
  }
}

export default Todo;

import React from "react";
import ReactDOM from "react-dom";

import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {" "}
        {this.props.todos.map((todo, i) => (
          <Todo
            key={i}
            index={i}
            task={todo.text}
            completed={todo.completed}
            xClick={() => this.props.todoXClick(i)}
            toggleClick = {() => this.props.toggleClick(i)}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;

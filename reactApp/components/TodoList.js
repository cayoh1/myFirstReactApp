import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './Todo';

class TodoList extends React.Component {
  render(){
    return(
        <ul> {this.props.tasks.map((task, i) => <Todo key = {i} index = {i} task = {task.text} completed = {task.completed}/>)}</ul>
    )
  }

}

export default TodoList;

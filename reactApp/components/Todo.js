
import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component {
  render(){
      return(
          this.props.completed ? <li  style = {{listStyleType:"none"}}> <button> X </button> <strike> {this.props.task} </strike> </li> :
          <li style = {{listStyleType:"none"}}> <button> X </button> {this.props.task}  </li>
      )
  }

}

export default Todo;

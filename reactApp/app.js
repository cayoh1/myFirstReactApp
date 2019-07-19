import React from 'react';
import ReactDOM from 'react-dom';
// import webpack from 'webpack';

let dummyData = ['clean room', 'do laundry', 'eat']
class InputLine extends React.Component {


}

class Todo extends React.Component {
  render(){
      return(
          <li>{this.props.task} <button> X </button></li>
      )
  }

}

class TodoList extends React.Component {
  render(){
    return(
        <ul> {this.props.tasks.map((task) => <Todo task = {task}/>)}</ul>
    )
  }

}

class TodoApp extends React.Component {


}


ReactDOM.render(
  <TodoList tasks = {dummyData}/> ,
   document.getElementById('root'));

// alert('app.js ran!');

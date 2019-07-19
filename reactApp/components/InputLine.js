import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component {
  render(){
      return(
        <div><input type = "text" placeholder = "Enter Task"></input><button>Add Todo</button></div>
      )
  }

}

export default InputLine;

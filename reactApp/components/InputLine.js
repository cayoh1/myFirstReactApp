import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ""
    }
  }
  submitTask(txt){
      this.props.submit(txt);
      this.setState({value: ""})
  }

  onChange(e){
      this.setState({value: e.target.value})
  }

  render(){
      return(
        <div><input type = "text" placeholder = "Enter Task" value = {this.state.value} onChange = {(e) => this.onChange(e)}/> <button onClick = {() => this.submitTask(this.state.value)} >Add Todo</button></div>
      )
  }

}

export default InputLine;

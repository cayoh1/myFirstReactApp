import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './TodoList';
import InputLine from './InputLine';

let dummyData = [{text: 'clean room', completed: false}, {text: 'do laundry', completed: true}, {text: 'eat', conpleted: false}]


class TodoApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
    }

    componentDidMount(){
        this.setState({todos: dummyData})
    }

    addTodo(task){
        let dummyData1 = this.state.todos.slice();
        dummyData1.push({text: task, completed:false})
        this.setState({todos: dummyData1})
    }

    render(){
        return(
            <div> <div> <InputLine submit = {(text) => this.addTodo(text)}/></div><div> <TodoList todos = {this.state.todos} /></div> </div>
        )
    }

}

export default TodoApp;

import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './TodoList';
import InputLine from './InputLine';

let dummyData = [{text: 'clean room', completed: false}, {text: 'do laundry', completed: true}, {text: 'eat', conpleted: false}]


class TodoApp extends React.Component {
    addTodo(task){
        dummyData.push({text: task, completed:false})
    }
    render(){
        return(
            <div> <div> <InputLine /></div><div> <TodoList tasks = {dummyData} /></div> </div>
        )
    }

}

export default TodoApp;

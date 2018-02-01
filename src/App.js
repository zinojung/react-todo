import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      todos: [
        {
          text: "test todo 1",
          isCompleted: false
        },
        {
          text: "test todo 2",
          isCompleted: false
        },
      ]
    };
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo = (newTodo) => {

    if(!newTodo) {
      return "Type anything!";
    } 

    const template = {
      text: newTodo,
      isCompleted: false
    }

    this.setState((prev) => {
      return { todos: prev.todos.concat(template) } ;
    });
  }
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;

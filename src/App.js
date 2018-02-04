import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import uuid from 'uuid';
import update from 'immutability-helper';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.makeCompletedTodo = this.makeCompletedTodo.bind(this);
  }
 
  componentDidMount() {
    try {
      const json = localStorage.getItem("todos");
      const todos = JSON.parse(json);
      if(todos) {
        this.setState({todos});
      }
    } catch(e) {
      //Do nothing;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.todos.length !== this.state.todos.length) {
      const json = JSON.stringify(this.state.todos);
      localStorage.setItem("todos", json);
    } else {
      const prevCompletedState = prevState.todos.map((todo) => ( todo.isCompleted ));
      const thisCompletedState = this.state.todos.map((todo) => ( todo.isCompleted ));
      for(let i = 0; i < this.state.todos.length; i++) {
        if(prevCompletedState[i] !== thisCompletedState[i]) {
          const json = JSON.stringify(this.state.todos);
          localStorage.setItem("todos", json);
        }
      }
    }
  }
  
  addTodo = (newTodo) => {

    const filterTodos = this.state.todos.filter((todo) => {
      return todo.text === newTodo;
    });

    if(!newTodo) {
      return "Type anything!";
    } else if (filterTodos.length > 0) {
      return "Same todo is exist!";
    }
    
    const template = {
      id: uuid(),
      text: newTodo,
      isCompleted: false
    }

    this.setState((prev) => {
      return { todos: prev.todos.concat(template) } ;
    });
  }

  removeTodo = (id) => {
    this.setState((prev) => ({ 
        todos:  prev.todos.filter((todo) => ( todo.id !== id ))
    }));
  }

  makeCompletedTodo = (id) => { 
    const todos = this.state.todos;
    const todoIndex = todos.findIndex((todo) => {
      return todo.id === id;
    });

    const updatedTodo = update(todos[todoIndex], {isCompleted: {$set: !todos[todoIndex].isCompleted}})
    const newTodos = update(todos, {
      $splice: [[todoIndex, 1, updatedTodo]]
    });
    this.setState({todos: newTodos});
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos 
          todos={this.state.todos} 
          removeTodo={this.removeTodo}
          makeCompletedTodo={this.makeCompletedTodo}
        />
      </div>
    );
  }
}

export default App;

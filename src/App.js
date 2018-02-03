import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import uuid from 'uuid';
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
    this.setState((prevState) => {
      const newTodos = prevState.todos.map((todo) => {
        if(todo.id === id) {
          todo.isCompleted = !todo.isCompleted
          return todo;
        }
        return todo;
      });
      return {
        todos: newTodos
      }
    });
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

import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <AddTodo />
        <Todos />
      </div>
    );
  }
}

export default App;

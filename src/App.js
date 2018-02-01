import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form>
          <input type="text" />
          <button>Add Todo</button>
        </form>
        <div>
          <div>
            <label>
              <input type="checkbox" />
              <span>This is test todo</span>
            </label>
            <button>Remove</button>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              <span>This is test todo</span>
            </label>
            <button>Remove</button>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              <span>This is test todo</span>
            </label>
            <button>Remove</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

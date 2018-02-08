import React, { Component } from 'react';
import Categories from './components/Categories';
import Todos from './components/Todos';
import uuid from 'uuid';
import update from 'immutability-helper';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        categories:[
            {
                id: uuid(),
                title: "오늘할일",
                isSelected: false, 
                todos: [
                    {id: "idid1", text:"오늘 고등어사기", isCompleted: false},
                    {id: "idid2", text:"text todo222!", isCompleted: false}
                ]
            },
            {
                id: uuid(),
                title: "쇼핑목록", 
                isSelected: true, 
                todos: [
                    {id: "idid1", text:"text todo!", isCompleted: false},
                    {id: "idid2", text:"text tdfwf!", isCompleted: false}
                ]
            }
        ]
    }
    this.handleSelectCategory = this.handleSelectCategory.bind(this);
  }
  /* 
    Categories Functions
  */
  handleAddCategory = (newCategoryName) => {
    if(!newCategoryName) {
      return "Plz Type anything!"
    } 

    const sameNameCategory = this.state.categories.filter((category) => {
      return category.title === newCategoryName
    })

    if(sameNameCategory.length > 0) {
      return "Already exist category name";
    }

    const newCategory ={
        id: uuid(),
        title: newCategoryName, 
        isSelected: false, 
        todos: []
    }

    this.setState((prevState) => {
      return { categories: prevState.categories.concat(newCategory) }
    })

    return "";
  }
  handleRemoveCategory = (id) => {
    const categories = this.state.categories.filter((category) => {
      return category.id !== id;
    }) 
    this.setState({ categories });
  }
  handleSelectCategory = (id) => {
    const data = this.state.categories;
    // Reset isSelected of categories
    const resetedCategories = data.map((category) => {
      return update(category, {isSelected: {$set: false}});
    });
    // this.setState({ categories: resetedCategories });
    
    // Update isSelected to true
    const foundIndex = data.findIndex((category) => {
      return category.id === id;
    });
    const updatedCategory = update(data[foundIndex], {isSelected: {$set: true}});
    var newData = update(resetedCategories, {
      $splice: [[foundIndex, 1, updatedCategory]]
    });
    this.setState({categories: newData});
  }
  /* 
    Todos Functions
  */
  handleAddTodo = (newTodo, categoryId) => {
    if(!newTodo) {
      return "Type anything!"
    }
    const data = this.state.categories;

    const selectedCategory = data.filter((category) => {
      return category.id === categoryId;
    })[0];

    const duplicatedTodo = selectedCategory.todos.filter((todo) => {
      return todo.text === newTodo;
    });

    if(duplicatedTodo.length > 0) {
      return "Already Exist Todo!";
    }
    const foundIndexOfCategory = this.state.categories.findIndex((category) => {
      return category.id === categoryId;
    });
    
    const templateTodo = {id: uuid(), text: newTodo , isCompleted: false}
    const newCategory = update(data[foundIndexOfCategory], {todos: {$push: [templateTodo]}});
    var newData = update(data, {
      $splice: [[foundIndexOfCategory, 1, newCategory]]
    });
    this.setState({categories: newData});
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <hr />
        <Categories 
          categories={this.state.categories}
          handleAddCategory={this.handleAddCategory}
          handleRemoveCategory={this.handleRemoveCategory}
          handleSelectCategory={this.handleSelectCategory}
        />
        {
          this.state.categories.map((category) => {
            if(category.isSelected) {
              return (
                <Todos 
                  key={category.id} 
                  category={category}
                  handleAddTodo={this.handleAddTodo}
                />
              ) 
            }
            return "";
          })
        }
        <button onClick={() => { console.log(this.state.categories); }}>Console.log State</button>
      </div>
    );
  }
}

export default App;

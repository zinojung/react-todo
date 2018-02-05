import React, { Component } from 'react';
import Categories from './components/Categories';
import Todos from './components/Todos';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        categories:[
            {
                id: uuid(),
                title: "오늘할일",
                selected: false, 
                todos: [
                    {id: "idid1", text:"오늘 고등어사기", isCompleted: false},
                    {id: "idid2", text:"text todo222!", isCompleted: false}
                ]
            },
            {
                id: uuid(),
                title: "쇼핑목록", 
                selected: true, 
                todos: [
                    {id: "idid1", text:"text todo!", isCompleted: false},
                    {id: "idid2", text:"text todo222!", isCompleted: false}
                ]
            }
        ]
    }
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
        selected: false, 
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
  /* 
    Todos Functions
  */
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <hr />
        <Categories 
          categories={this.state.categories}
          handleAddCategory={this.handleAddCategory}
          handleRemoveCategory={this.handleRemoveCategory}
        />
        {
          this.state.categories.map((category) => {
            if(category.selected) {
              return <Todos key={category.id} category={category}/>
            }
            return "";
          })
        }
      </div>
    );
  }
}

export default App;

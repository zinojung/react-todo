import React from 'react';

export default class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ""
        }
    }
    handleAddTodo = (e) => {
        e.preventDefault();
        const todo = e.target.elements.todo.value.trim();
        const categoryId = this.props.categoryId;
        const error = this.props.handleAddTodo(todo, categoryId);
        
        if(error) {
            this.setState({ error });
        } else {
            e.target.elements.todo.value = '';
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddTodo}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input type="text" name="todo"/>
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}
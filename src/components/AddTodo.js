import React from 'react';

export default class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: undefined
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit = (e) => {
        e.preventDefault();
        const error = this.props.addTodo(e.target.elements.todo.value);

        this.setState({ error });

        if(!error) {
            e.target.elements.todo.value = ""
        }
    }
    render() {
        return (
            <div>
                { this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="todo"/>
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}
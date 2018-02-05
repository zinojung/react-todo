import React from 'react';

export default class AddTodo extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="todo"/>
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}
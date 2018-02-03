import React from 'react';

const TodoItem = (props) => {
    const onClick = () => {
        props.removeTodo(props.todo.id);
    }
    return (
        <div>
            <label>
              <input type="checkbox" />
              <span>{props.todo.text}</span>
            </label>
            <button onClick={onClick}>Remove</button>
        </div>
    );
}

export default TodoItem;
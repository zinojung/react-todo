import React from 'react';

const TodoItem = (props) => {
    return (
        <div>
            <label>
              <input type="checkbox" />
              <span>{props.todo.text}</span>
            </label>
            <button>Remove</button>
        </div>
    );
}

export default TodoItem;
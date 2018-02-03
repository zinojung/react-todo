import React from 'react';

const TodoItem = (props) => {
    const onRemove = () => {
        props.removeTodo(props.todo.id);
    }
    const onChecked = () => {
        props.makeCompletedTodo(props.todo.id);
    }
    return (
        <div>
            <label>
              <input type="checkbox"
                checked={props.todo.isCompleted}
                onChange={onChecked}
              />
              <span className={props.todo.isCompleted ? 'checked' : ''}>{props.todo.text}</span>
            </label>
            <button onClick={onRemove}>Remove</button>
        </div>
    );
}

export default TodoItem;
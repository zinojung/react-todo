import React from 'react';
import TodoItem from './TodoItem';
const Todos = (props) => {
    return (
        <div>
            {props.todos.map((todo) => <TodoItem key={todo.text} todo={todo}/>)}
        </div>
    )
}

export default Todos;
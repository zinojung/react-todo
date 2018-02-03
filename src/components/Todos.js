import React from 'react';
import TodoItem from './TodoItem';


const Todos = (props) => {
    return (
        <div>
            {props.todos.map((todo) => {
                return (
                    <TodoItem 
                        key={todo.text} 
                        todo={todo}
                        removeTodo={props.removeTodo}
                        makeCompletedTodo={props.makeCompletedTodo}
                    />
                );
            })}
        </div>
    )
}

export default Todos;
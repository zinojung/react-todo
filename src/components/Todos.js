import React from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';


const Todos = (props) => {
    return (
        <div>
            <AddTodo />
            {props.category.todos.map((todo) => {
                return (
                    <TodoItem 
                        key={todo.text} 
                        todo={todo}
                    />
                );
            })}
        </div>
    )
}

export default Todos;
import React from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';


const Todos = (props) => {
    return (
        <div>
            <AddTodo 
                handleAddTodo={props.handleAddTodo}
                categoryId={props.category.id}
            />
            {props.category.todos.map((todo) => {
                return (
                    <TodoItem 
                        key={todo.text} 
                        todo={todo}
                        categoryId={props.category.id}
                    />
                );
            })}
        </div>
    )
}

export default Todos;
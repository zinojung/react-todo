import React from 'react';

const TodoItem = () => {
    return (
        <div>
            <label>
              <input type="checkbox" />
              <span>This is test todo</span>
            </label>
            <button>Remove</button>
        </div>
    );
}

export default TodoItem;
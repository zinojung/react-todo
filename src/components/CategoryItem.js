import React from 'react';

const CategoryItem = (props) => {
    const handleClick = () => {
        const id = props.category.id;
        props.handleRemoveCategory(id);
    }
    return (
        <div>
            <h4>
                {props.category.title}
                <button onClick={handleClick}>Remove</button>
            </h4>
        </div>
    );
}

export default CategoryItem;
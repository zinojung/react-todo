import React from 'react';

const CategoryItem = (props) => {
    const id = props.category.id;
    const handleSelectCategory = () => {
        props.handleSelectCategory(id);
    }
    const handleRemoveButton = () => {
        props.handleRemoveCategory(id);
    }
    return (
        <div>
            <h4 onClick={handleSelectCategory}>{props.category.title}</h4>
            <button onClick={handleRemoveButton}>Remove</button>
        </div>
    );
}

export default CategoryItem;
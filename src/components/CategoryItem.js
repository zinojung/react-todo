import React from 'react';

const CategoryItem = (props) => {
    return (
        <div>
            <h4>{props.category.title}</h4>
        </div>
    );
}

export default CategoryItem;
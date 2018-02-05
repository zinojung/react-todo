import React from 'react';
import AddCategory from './AddCategory';
import CategoryItem from './CategoryItem';


// Categories: [
//    {title: "오늘할일", todos: []}
//]

export default class Categories extends React.Component {

    render() {
        return (
            <div>
                <h3>Categories</h3>
                <AddCategory 
                    handleAddCategory={this.props.handleAddCategory}
                />
                {
                    this.props.categories.map((category) => {
                        return (
                            <CategoryItem 
                                category={category}
                                key={category.id}
                                handleRemoveCategory={this.props.handleRemoveCategory}
                                />
                        )
                    })
                }
            </div>
        );
    } 
} 
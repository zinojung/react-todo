import React from 'react';
import AddCategory from './AddCategory';
import CategoryItem from './CategoryItem';

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
                                handleSelectCategory={this.props.handleSelectCategory}
                                />
                        )
                    })
                }
            </div>
        );
    } 
} 
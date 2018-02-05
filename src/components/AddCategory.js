import React, {Component} from 'react';

export default class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.category.value;
        const error = this.props.handleAddCategory(name);

        if(error) {
            this.setState({ error });
        } else {
            this.setState({ error: "" });
            e.target.elements.category.value = ""
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="category"/>
                    <button>Add Category</button>
                </form>
            </div>
        )
    }
}
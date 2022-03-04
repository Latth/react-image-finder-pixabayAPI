import React from "react";

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {entry: ''};
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.entry);
    };

    render() {
        return (
            <div className="ui segment" style={{marginTop: "30px"}}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <div className="ui massive icon input">
                            <input 
                            type="text" 
                            placeholder="Search..." 
                            onChange={(e) => this.setState({entry: e.target.value})} 
                            value={this.state.entry}
                            />
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput;
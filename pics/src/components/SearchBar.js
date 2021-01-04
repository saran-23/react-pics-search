import React from 'react';

class SearchBar extends React.Component {
    onInputChange(event) {
        console.log(event.target.value);
    }
    render() {
        return ( 
            <div className="ui segment">
         <form className="ui form">
             <label>Image Search </label>
             <div className="field">
        <input type="text" onChange={this.onInputChange} /> 
        </div>
        </form>   
        </div>
        );
    };
};

export default SearchBar;
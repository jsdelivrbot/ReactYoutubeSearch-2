import React from "react";
import {Component} from "react";


class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term: 'Ho ho ho...'};
  }
  render(){
    return (
      <div className="search-bar">
        <p>Value of the input: {this.state.term}</p>
        <input
          placeholder={this.state.term}
          onChange={(event)=> this.setState({term: event.target.value}) }  />
      </div>
     );
  };

}

export default SearchBar;

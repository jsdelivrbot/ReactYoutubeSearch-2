import React from "react";
import {Component} from "react";


class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term: 'Ho ho ho...'};
  }
  _onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  render(){
    return (
      <div className="search-bar">
        <input
          placeholder={this.state.term}
          onChange={(event)=> this._onInputChange({term: event.target.value}) }  />
      </div>
     );
  };

}

export default SearchBar;

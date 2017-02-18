import React from "react";
import {Component} from "react";


class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term: ''};
  }
  render(){
    return (
      <div>
        <p>Value of the input: {this.state.term}</p>
        <input onChange={(event)=> this.setState({term: event.target.value}) } />
      </div>
     );
  };

}

export default SearchBar;

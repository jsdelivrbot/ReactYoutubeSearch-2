import React ,{Component}from 'react';
import ReactDom from 'react-dom';
// YOUTUBE Library
import YTSearch from 'youtube-api-search';


import SearchBar from './components/search_bar';

const API_KEY =  "YOUR API";
YTSearch({key: API_KEY, term: "surfboards"}, (data) => {
  console.log(data);
});


class App extends Component{
  render(){
     return(
       <div>
         <SearchBar />
       </div>
     );
  }
}



ReactDom.render(<App/>, document.querySelector('.container'));

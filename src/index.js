import React ,{Component}from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY =  "YOUR API";

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

import React ,{Component}from 'react';
import ReactDom from 'react-dom';
// YOUTUBE Library
import YTSearch from 'youtube-api-search';

import VideoList from './components/video_list';
import SearchBar from './components/search_bar';

const API_KEY =  "";


class App extends Component{
  constructor(props){
    super(props);
    // Attributes
    this.state= {videos: []};

    //Methods
    this._fetchData();
  }
  _fetchData(){
    YTSearch({key: API_KEY, term: "surfboards"}, (data) => {
        this.setState({videos:data});
    });
  }

  render(){

     return(
       <div>
         <SearchBar />
         <VideoList videos={this.state.videos} />
       </div>
     );
  }
}



ReactDom.render(<App/>, document.querySelector('.container'));

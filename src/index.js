import React ,{Component}from 'react';
import ReactDom from 'react-dom';
// YOUTUBE Library
import YTSearch from 'youtube-api-search';

import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const API_KEY =  "API";


class App extends Component{
  constructor(props){
    super(props);
    // Attributes
    this.state= {videos: [], selectedVideo: null};

    //Methods
    this._fetchData();
  }
  _fetchData(){
    YTSearch({key: API_KEY, term: "surfboards"}, (data) => {
        this.setState({
          videos:data,
          selectedVideo: data[0]
        });
    });
  }

  render(){

     return(
       <div>
         <SearchBar />
         <VideoDetail video={this.state.selectedVideo} />
         <VideoList onVideoSelect={(selectedVideo)=> this.setState({selectedVideo})} videos={this.state.videos} />
       </div>
     );
  }
}



ReactDom.render(<App/>, document.querySelector('.container'));

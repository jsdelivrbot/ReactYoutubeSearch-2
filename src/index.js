import React ,{Component}from 'react';
import ReactDom from 'react-dom';
// YOUTUBE Library
import YTSearch from 'youtube-api-search';

import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

// SECRETS TO INVOKE THE API YOUTUBE
import Secret from './secrets/secrets';
const API_KEY =  new Secret().api();


class App extends Component{
  constructor(props){
    super(props);
    // Attributes
    this.state= {videos: [], selectedVideo: null};

    //Methods
    this.fetchData("surfboards");

  }


  fetchData(term){
    YTSearch({key: API_KEY, term: term}, (data) => {
        this.setState({
          videos:data,
          selectedVideo: data[0]
        });
    });
  }

  render(){

     return(
       <div className="container-fluid">
         <div className="row">
           <SearchBar onSearchTermChange={(term) => this.fetchData(term)} />
         </div>
         <div className="row">
           <div className="col-sm-8">
             <VideoDetail video={this.state.selectedVideo} />
           </div>
           <div className="col-sm-4">
             <VideoList onVideoSelect={(selectedVideo)=> this.setState({selectedVideo})} videos={this.state.videos} />
           </div>
         </div>
       </div>
     );
  }
}



ReactDom.render(<App/>, document.querySelector('.container'));

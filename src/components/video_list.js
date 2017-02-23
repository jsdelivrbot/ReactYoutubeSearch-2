import React,{Component} from 'react';
import VideoListItem from './video_list_item';


export default class VideoList extends Component{

  _turnVideosIntoComponents(){
    return this.props.videos.map((video)=>{
                   return <VideoListItem onVideoClick={this.props.onVideoSelect} video={video} key={video.etag}/>
            });

  }



  render(){
    return(
      <ul className="col-md-12  list-group">
        {this._turnVideosIntoComponents()}
      </ul>
    );
  }
}

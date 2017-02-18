import React,{Component} from 'react';
import VideoListItem from './video_list_item';


export default class VideoList extends Component{

  _turnVideosIntoComponents(){
    return this.props.videos.map((video)=>{
                   return <VideoListItem  video={video} key={video.snippet.channelId}/>
            });

  }



  render(){
     //let videoItems = this._turnVideosIntoComponents();
      //console.log(videoItems);

    return(
      <ul className="col-md-4 list-group">
        {this._turnVideosIntoComponents()}
      </ul>
    );
  }
}

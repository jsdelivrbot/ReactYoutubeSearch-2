import React,{Component} from "react";


export default class VideoListItem extends Component{
  constructor(props){
    super(props)
    this.video_info = this.props.video.snippet.description;
    this.img_url = this.props.video.snippet.thumbnails.default.url;
    this.video_title = this.props.video.snippet.title;
  }
  render(){
    return(
      <li onClick={()=>this.props.onVideoClick(this.props.video)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={this.img_url} />
          </div>

          <div className="media-body">
            <div className="media-heading">{this.video_title}</div>
          </div>
        </div>
      </li>
    );
  }
}

import React,{Component} from 'react';


export default class VideoDetail extends Component{
  constructor(props){
    super(props);

    this.videoId = this.props.video.id.videoId;
    this.url = `http://www.youtube.com/embed/${this.videoId}`;
  }

  render(){
    return(
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={this.url}> </iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    );
  }

}

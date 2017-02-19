import React,{Component} from 'react';


export default class VideoDetail extends Component{
//
  render(){
   if (!this.props.video){
     return (<span>Loading...</span>);
   }
   else{

    let videoId = this.props.video.id.videoId;
    let url = `http://www.youtube.com/embed/${videoId}`;
    return(
       <div>
         <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}> </iframe>
         </div>
         <div className="details">
           <div>{this.props.video.snippet.title}</div>
           <div>{this.props.video.snippet.description}</div>
         </div>
       </div>
    );
   }
  }

}



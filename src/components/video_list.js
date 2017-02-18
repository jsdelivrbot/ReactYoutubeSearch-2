import React,{Component} from 'react';

export default class VideoList extends Component{
  render(){

    return(
      <ul className="col-md-4 list-group">
        There are {this.props.videos.length} videos
      </ul>
    );
  }
}

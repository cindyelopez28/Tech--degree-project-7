import React, { Component } from "react";

class Photo extends Component {
  render() {
    const photoStyle = {
      width: "200px",
      height: "200px",
      backgroundColor: "blue",
    };
    const server = this.props.imageData.server;
    const id = this.props.imageData.id;
    const secret = this.props.imageData.secret;

    return <img style={photoStyle} src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`}/>;
  }
}

export default Photo;


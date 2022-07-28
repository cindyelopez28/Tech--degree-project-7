import React, { Component } from "react";
import Photo from "./Photo";

class PhotoList extends Component {
  componentDidUpdate() {
    // console.log("inside photo list", this.props.listOfPhotos.photos);
  }

  render() {
    return (
      <div>
        {this.props.listOfPhotos.photos &&
          this.props.listOfPhotos.photos.photo.map((imageData, i) => {
            return <Photo key={i} imageData={imageData} />;
          })}
      </div>
    );
  }
}

export default PhotoList;


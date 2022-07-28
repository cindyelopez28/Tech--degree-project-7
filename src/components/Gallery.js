// import components and routers

import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import PhotoList from "./PhotoList";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";

class Gallery extends Component {

  componentDidUpdate(prevProps) {
    let currSearchQuery = this.props.location.pathname.split("/")[2];
    let prevSearchQuery = prevProps.location.pathname.split("/")[2];
    if (this.props.isURLSearch && currSearchQuery !== prevSearchQuery) {
      this.props.handleSearch(currSearchQuery);
    }
  }
  componentDidMount() {
    if (this.props.isURLSearch) {
      let currSearchQuery = this.props.location.pathname.split("/")[2];
      this.props.handleSearch(currSearchQuery);
    }
  }

  render() {
    const galleryStyle = {
      margin: "10 auto",
    };
    return (
      <>
        <SearchBar
          handleSearch={this.props.handleSearch}
          history={this.props.history}
        ></SearchBar>
        <NavBar history={this.props.history}></NavBar>
        <PhotoList
          style={galleryStyle}
          listOfPhotos={this.props.data}
        ></PhotoList>
      </>
    );
  }
}

const GalleryWithRouter = withRouter(Gallery);
export default GalleryWithRouter;

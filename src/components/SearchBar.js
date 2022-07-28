import React, { Component } from "react";

class SearchBar extends Component {

  state = {
    searchQuery: ""
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/search/' + this.state.searchQuery);
  }
  render() {
    const searchStyle = {
      width: "500px",
      height: "100px",
      backgroundColor: "#F0C1FE",
      borderRadius: "500px",
      paddingTop: "30px",
      paddingRight: "30px",
      paddingBottom: "0px",
      paddingLeft: "0px",
      fontSize: "35px",
    };

    return (
      <form style={searchStyle} onSubmit={this.handleSubmit}>
        <input
          placeholder={"Search"}
          type="text"
          onChange={(e) => this.setState({searchQuery: e.target.value})}
        ></input>
      </form>
    );
  }
}

export default SearchBar;


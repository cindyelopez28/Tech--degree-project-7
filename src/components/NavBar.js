import React, { Component } from "react";

class NavBar extends Component {
  handleButtonClick = (e) => {
    // localhost:3000/Cats
    this.props.history.push("/" + e.target.innerHTML);
  };

  render() {
    const navbarContainer = {
      width: "800px",
      display: "flex",
      justifyContent: "space-around",
    };

    const navbarButton = {
      width: "100px",
      height: "30px",
      backgroundColor: "#F0C1FE",
    };

    return (
      <div style={navbarContainer}>
        <button style={navbarButton} onClick={this.handleButtonClick}>
          {"Dogs"}
        </button>
        <button style={navbarButton} onClick={this.handleButtonClick}>
          {"Cats"}
        </button>
        <button style={navbarButton} onClick={this.handleButtonClick}>
          {"Birds"}
        </button>
      </div>
    );
  }
}

export default NavBar;



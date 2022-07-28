//import components and routes

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import apiKey from "./components/config";
import Gallery from "./components/Gallery";

//create class component  
class App extends Component {
  state = {
    cats: [],
    dogs: [],
    birds: [],
    searchResults: [],
  };
//fetching data from flick api and mounting it onto the dom
  componentDidMount() {
    this.handleSearch("birds");
    this.handleSearch("cats");
    this.handleSearch("dogs");
  }
//setting up precommit phase to determine which data will render 
//create condition to determine what data will render 
  handleSearch = (query) => {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=50a9c4560be20d649107212cad01b810&text=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((data) => {
        switch (query) {
          case "dogs":
            this.setState({ dogs: data });
            break;
          case "cats":
            this.setState({ cats: data });
            break;
          case "birds":
            this.setState({ birds: data });
            break;
          default:
            this.setState({ searchResults: data });
        }
      });
  };
//data renders
//create routes for state
  render() {
    return (
      <div className={"App"}>
        <BrowserRouter>
          <Switch>
            <Route path="/birds">
              <Gallery data={this.state.birds} isURLSearch={false} />
            </Route>
            <Route path="/cats">
              <Gallery data={this.state.cats} isURLSearch={false} />
            </Route>
            <Route path="/dogs">
              <Gallery
                data={this.state.dogs}
                isURLSearch={false}
                handleSearch={this.handleSearch}
              />
            </Route>
            <Route path="/search/:searchParam">
              <Gallery
                data={this.state.searchResults}
                handleSearch={this.handleSearch}
                isURLSearch={true}
              />
            </Route>
            <Route path="/search">
              <Gallery
                data={this.state.cats}
                handleSearch={this.handleSearch}
                isURLSearch={false}
              />
            </Route>
            <Route path="/:invalidSearch">
              <h1> 404 results not found </h1>
            </Route>
            <Route path="/">
              <Gallery
                data={this.state.dogs}
                handleSearch={this.handleSearch}
                isURLSearch={false}
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;



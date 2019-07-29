import React from "react";
import "./App.css";
import placeholder from "./75.png"

class Card extends React.Component {
  render() {
    return (
      <div className="github-profile">
        <img src={placeholder} alt={"placeholder"}/>
        <div className="info">
          <div className="name">Name here...</div>
          <div className="company">Company here...</div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Card />
      </div>
    );
  }
}

export default App;

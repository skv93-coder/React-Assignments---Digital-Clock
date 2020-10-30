import React, { Component, useState } from "react";
import "../styles/App.css";

let d = new Date();
class App extends Component {
  constructor() {
    super();
    this.state = {
      string: `${
        d.getHours() % 12
      }+":"+${d.getMinutes()}+":"+${d.getSeconds()}+" "+${
        d.getHours() >= 12 ? "PM" : "AM"
      }`
    };
  }
  componentDidMount() {
    const k = setInterval(
      (d = new Date()),
      this.setState(() => {
        this.state.string = `${
          d.getHours() % 12
        }+":"+${d.getMinutes()}+":"+${d.getSeconds()}+" "+${
          d.getHours() >= 12 ? "PM" : "AM"
        }`;
      }),
      1000
    );
    return () => {
      clearInterval(k);
    };
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time" className="Date">
          {this.state.string}
        </h3>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Result from "./components/Result";
import Keypad from "./components/Keypad";
import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:3001");

class App extends Component {
  state = {
    terms: "",
    ex: []
  };

  onClick = button => {
    if (button === "=") {
      this.calculate();
    } else if (button === "AC") {
      this.clear();
    } else if (button === "C") {
      this.backspace();
    } else {
      this.setState({
        terms: this.state.terms + button
      });
    }
  };

  clear = () => {
    this.setState({ terms: "" });
  };

  backspace = () => {
    this.setState({ terms: this.state.terms.slice(0, -1) });
  };

  calculate = () => {
    this.setState({ terms: eval(this.state.terms) });
    socket.emit("push", this.state.terms);
  };

  displaycalculations = () => {
    socket.on("initial state", data => this.setState({ ex: data.reverse() }));

    socket.on("pop", terms => this.setState({ ex: terms.reverse() }));
  };

  componentDidMount() {
    this.displaycalculations();
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <div className="ui stackable two column grid">
          <div className="column">
            <Result terms={this.state.terms} />
            <Keypad onClick={this.onClick} />
          </div>
          <div className="black column">
            <h1>Previous Calculations</h1>
            <ul className="ui list">
              {this.state.ex.map((term, index) => {
                return (
                  <li className="item" key={index}>
                    {term}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

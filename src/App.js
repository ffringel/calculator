import React, { Component } from "react";
import Result from "./components/Result";
import Keypad from "./components/Keypad";

class App extends Component {
  state = {
    terms: "",
    result: ""
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
        terms: this.state.terms + button,
        result: this.state.result + button
      });
    }
  };

  clear = () => {
    this.setState({ result: "" });
  };

  backspace = () => {
    this.setState({ result: this.state.result.slice(0, -1) });
  };

  calculate = () => {
    try {
      this.setState({ result: (eval(this.state.result) || "") + "" });
    } catch (e) {
      this.setState({ result: "err" });
    }
  };

  render() {
    console.log(this.state.terms + " = " + this.state.result);
    return (
      <div className="ui container">
        <Result result={this.state.result} />
        <Keypad onClick={this.onClick} />
      </div>
    );
  }
}

export default App;

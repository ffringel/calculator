import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Keypad from "./components/Keypad";
import Result from "./components/Result";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// test components are rendered without crashing
describe("App's components are loaded and rendered", () => {
  it("Keypad renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Keypad />, div);
  });

  it("Result renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Result />, div);
  });
});

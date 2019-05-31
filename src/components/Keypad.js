import React, { Component } from "react";

class Keypad extends Component {
  buttonOnClick = event => {
    this.props.onClick(event.target.name);
  };

  render() {
    return (
      <div>
        <button className="ui button" name="(" onClick={this.buttonOnClick}>
          (
        </button>
        <button className="ui button" name=")" onClick={this.buttonOnClick}>
          )
        </button>
        <button className="ui button" name="C" onClick={this.buttonOnClick}>
          C
        </button>
        <button className="ui button" name="AC" onClick={this.buttonOnClick}>
          AC
        </button>
        <br />

        <button className="ui button" name="1" onClick={this.buttonOnClick}>
          1
        </button>
        <button className="ui button" name="2" onClick={this.buttonOnClick}>
          2
        </button>
        <button className="ui button" name="3" onClick={this.buttonOnClick}>
          3
        </button>
        <button className="ui button" name="+" onClick={this.buttonOnClick}>
          +
        </button>
        <br />

        <button className="ui button" name="4" onClick={this.buttonOnClick}>
          4
        </button>
        <button className="ui button" name="5" onClick={this.buttonOnClick}>
          5
        </button>
        <button className="ui button" name="6" onClick={this.buttonOnClick}>
          6
        </button>
        <button className="ui button" name="-" onClick={this.buttonOnClick}>
          -
        </button>
        <br />

        <button className="ui button" name="7" onClick={this.buttonOnClick}>
          7
        </button>
        <button className="ui button" name="8" onClick={this.buttonOnClick}>
          8
        </button>
        <button className="ui button" name="9" onClick={this.buttonOnClick}>
          9
        </button>
        <button className="ui button" name="*" onClick={this.buttonOnClick}>
          *
        </button>
        <br />

        <button className="ui button" name="." onClick={this.buttonOnClick}>
          .
        </button>
        <button className="ui button" name="0" onClick={this.buttonOnClick}>
          0
        </button>
        <button className="ui button " name="=" onClick={this.buttonOnClick}>
          =
        </button>
        <button className="ui button" name="/" onClick={this.buttonOnClick}>
          /
        </button>
        <br />
      </div>
    );
  }
}

export default Keypad;

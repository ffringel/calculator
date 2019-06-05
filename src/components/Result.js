import React, { Component } from "react";

class Result extends Component {
  render() {
    return (
      <div className="ui fluid input focus">
        <input type="text" defaultValue={this.props.terms} disabled />
      </div>
    );
  }
}

export default Result;

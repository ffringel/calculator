import React, { Component } from "react";

class PrevCal extends Component {
  render() {
    return (
      <div>
        <h1>Previous Calculations</h1>
        <ul ref="calculations" />
      </div>
    );
  }
}

export default PrevCal;

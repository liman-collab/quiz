import React, { Component } from "react";

class ProgressBar extends Component {
  render() {
    return (
      <div
        style={{
          width: `${this.props.width}%`,
          height: 50,
          backgroundColor: "#FF7F27",
        }}
      ></div>
    );
  }
}

export default ProgressBar;

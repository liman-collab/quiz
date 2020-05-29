import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  reset = () => {
    this.props.rifilloLojen();
  };
  check = () => {
    this.props.checkAnswer();
  };
  render() {
    return (
      <div>
        <button
          style={{
            backgroundColor: `${this.props.ngjyra}`,
            color: `${this.props.color}`,
          }}
          onClick={this.props.metoda}
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}

export default Button;

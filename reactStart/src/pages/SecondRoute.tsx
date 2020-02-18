import * as React from "react";

export default class SecondPage extends React.Component {
  state = {
    inputValue: "I can bind"
  };

  handleInput = event => {
    this.setState({ inputValue: event.target.value });
  };
  render() {
    return (
      <div>
        <h1>Second route is function</h1>
        <p>{this.state.inputValue}</p>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInput}
        />
      </div>
    );
  }
}

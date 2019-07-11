import React from "react";

export class InputElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: 0 };
  }
  onChangeHandler = event => {
    const {
      target: { value }
    } = event;
    this.changeStateValue(value);
  };

  changeStateValue = value => {
    this.setState({ inputValue: value });
  };
  render() {
    return (
      <input
        type="text"
        value={this.state.inputValue}
        onChange={this.onChangeHandler}
      />
    );
  }
}

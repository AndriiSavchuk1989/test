import React from "react";

export class InputElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: 0, initialValue: 0 };
  }

  componentDidMount() {
    this.setState({
      inputValue: this.props.value || 1,
      initialValue: this.props.value || 1
    });
  }
  onChangeHandler = event => {
    const {
      target: { value }
    } = event;
    this.changeStateValue(value);
  };

  changeStateValue = value => {
    this.setState({ inputValue: value });
    this.props.changeTracker(value);
  };

  returnDefaultValue = value => {
    this.setState({ inputValue: value });
  };

  onMouseOutHandler = event => {
    const {
      target: { value }
    } = event;
    if (!value.length) {
      this.returnDefaultValue(this.state.initialValue);
    }
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.inputValue}
        onChange={this.onChangeHandler}
        onMouseOut={this.onMouseOutHandler}
      />
    );
  }
}

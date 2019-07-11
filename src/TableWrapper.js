import React from "react";

export class TableWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentChangedValue: 0 };
  }

  onTrackChangedValue = value => {
    this.setState({
      currentChangedValue: value
    });
  };

  render() {
    return <table />;
  }
}

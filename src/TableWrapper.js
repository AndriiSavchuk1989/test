import React from "react";

import { tableRowCreator } from "./tableRowCreator";

export class TableWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentChangedValue: 0 };
  }

  onTrackChangedValue = value => {
    this.setState({
      currentChangedValue: value
    });
    console.log("state from table___", this.state.currentChangedValue);
  };

  render() {
    const { list } = this.props;
    return (
      <table>
        <tbody>
          {list.map(listItem =>
            tableRowCreator(listItem, this.onTrackChangedValue)
          )}
        </tbody>
      </table>
    );
  }
}

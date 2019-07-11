import React from "react";

import { tableRowCreator } from "./tableRowCreator";

export class TableWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentChangedValue: 0 };
  }

  onTrackChangedValue = value => {
    this.setState(() => {
      return { currentChangedValue: value };
    });
    console.log("state from table___", this.state.currentChangedValue);
    this.updateCellValue(this.state.currentChangedValue);
  };

  updateCellValue = value => {
    console.log("updated value___", value);
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

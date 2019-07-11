import React from "react";
import { TableCell } from "./TableCell";

export function tableRowCreator(listOfCells = [], changeTracker = null) {
  return (
    <tr>
      {listOfCells.map(cell => (
        <TableCell
          cellData={cell.value}
          key={cell.value}
          changeTracker={changeTracker}
        />
      ))}
    </tr>
  );
}

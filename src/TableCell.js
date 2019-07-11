import React from "react";
import { InputElement } from "./InputElement";

export function TableCell(props) {
  const { cellData, isEditable, editFunc, changeFunc, changeTracker } = props;
  const isEditableCell = isEditable ? "enable-to-edit" : "unable-to-edit";
  console.log("props in cell", props);
  return (
    <td onClick={editFunc} onChange={changeFunc} className={isEditableCell}>
      {cellData}
      <InputElement changeTracker={changeTracker} />
    </td>
  );
}

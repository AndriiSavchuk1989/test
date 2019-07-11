import React from "react";
import { InputElement } from "./InputElement";

export function TableCell(props) {
  const { cellData, isEditable, editFunc, changeFunc, changeTracker } = props;
  const isEditableCell = isEditable ? "enable-to-edit" : "unable-to-edit";
  return (
    <td onClick={editFunc} onChange={changeFunc} className={isEditableCell}>
      {cellData}
      <InputElement changeTracker={changeTracker} />
    </td>
  );
}

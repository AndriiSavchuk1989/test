import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// element
import { TableWrapper } from "./TableWrapper";

// list
const lists = [
  [
    {
      value: "1",
      id: 0,
      isEditable: true
    },
    {
      value: "2",
      id: 1,
      isEditable: false
    },
    {
      value: "3",
      id: 2,
      isEditable: true
    },
    {
      value: "4",
      id: 3,
      isEditable: true
    },
    {
      value: "5",
      id: 4,
      isEditable: true
    },
    {
      value: "6",
      id: 5,
      isEditable: true
    }
  ],
  [
    {
      value: "6",
      id: 6,
      isEditable: true
    },
    {
      value: "5",
      id: 7,
      isEditable: true
    },
    {
      value: "4",
      id: 8,
      isEditable: true
    },
    {
      value: "3",
      id: 9,
      isEditable: true
    },
    {
      value: "2",
      id: 10,
      isEditable: true
    },
    {
      value: "1",
      id: 11,
      isEditable: true
    }
  ]
];

const rootElement = document.getElementById("root");
ReactDOM.render(<TableWrapper list={lists} />, rootElement);

import React from "react";
import ReactDOM from "react-dom";

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Apricot",
  "Black rowan",
  "Cranberry",
];

// const root = ReactDOM.createRoot(document.getElementById("root"));

ReactDOM.render(
  <div>
    <h1>List of fruits</h1>
    <ul>
      {fruits.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>,
  document.getElementById("root")
);

// import ReactDOM from 'react-dom';

// const fruits = ['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry']

// ReactDOM.render(
// <div>
//     <h1>List of fruits</h1>
//     <ul>
//       { fruits.map((item) => (
//         <li>{ item }</li>
//       )) }
//     </ul>
//  </div>,
// document.getElementById("root")
// )

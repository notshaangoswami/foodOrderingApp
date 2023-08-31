import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "xyz" },
  "Hello World from React"
); //object
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

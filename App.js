import React from "react";
import ReactDOM from "react-dom/client";
//component composition
//-component inside a component

const title = (
  <h1 id="heading" tabIndex="5">
    Namaste Shaan Using jsx
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {title}  //js using '{}''
    Namaste Shaan Functional Component
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />); //functional Component

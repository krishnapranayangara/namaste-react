import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Learning React with Namaste React!😎"),
  ),
  "Hello Krishna Angara!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

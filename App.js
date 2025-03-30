import React from "react";
import ReactDOM from "react-dom/client";

// ReactElement-JS Object => HTMLElement(rendered on the browser)
// const heading = React.createElement("h1", { id: "heading" }, "Learning React by Building a Project 🧑🏽‍💻!!");


// JSX => React.createElement => ReactElement-JS Object => HTMLElement(rendered on the browser)
const jsxheading = <h1 id="heading">Namaste H1 using JSX!! 😎</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));


//React Functional Component
const TitleComponent =() => { return <h1>Title component for Namaste react!!</h1> };
const HeadingComponent = () => (
    <div id="Container">
        {jsxheading}
        {TitleComponent()}
        <h2 className="heading"> Namaste React Functional Component!! 😀</h2>
    </div>
);

root.render(<HeadingComponent />);
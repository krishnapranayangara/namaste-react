import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header.jsx";
import Body from "./components/Body.jsx";

// ReactElement-JS Object => HTMLElement(rendered on the browser)
// const heading = React.createElement("h1", { id: "heading" }, "Learning React by Building a Project 🧑🏽‍💻!!");
// JSX => React.createElement => ReactElement-JS Object => HTMLElement(rendered on the browser)




const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
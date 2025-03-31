import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logo2 from "./src/assets/logo2.jpg";

// ReactElement-JS Object => HTMLElement(rendered on the browser)
// const heading = React.createElement("h1", { id: "heading" }, "Learning React by Building a Project 🧑🏽‍💻!!");


// JSX => React.createElement => ReactElement-JS Object => HTMLElement(rendered on the browser)

/**
 * 
 * Header
 *  - logo 
 *  - Nav Items
 * 
 * Body 
 * - Search
 * - Restaurant List
 *   - Restaurant Card
 *  
 * Footer
 * - Copyright Information
 * - Links to Social Media
 * - Address
 * - Contact Information
 * 
 */

const Header = () => {
    return (
        <div className = "header">
            <div>
                <img className="logo" src={logo2} alt="Logo image"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    
                </ul>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            
        </div>
    );
}

const AppLayout = () =>  {
    return(
        <div className = "app">
            <Header/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(AppLayout());
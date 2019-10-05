//Works as create element
import React from "react";
//Works as appendchild
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
// import App from './components/App';


import App from './components/App';

const container = document.getElementById("app");

// ReactDOM.render(<BadgeNew />, container);

// ReactDOM.render(<Badges />, container);
ReactDOM.render(<App />, container);

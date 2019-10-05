
// const element=document.createElement('h1');
// element.innerText='Hey wsp nigga';

// const container=document.getElementById('app');
// container.appendChild(element);

//Works as create element
import React from "react";
//Works as appendchild
import ReactDOM from "react-dom";
// import 'bootstrap/dist/css/bootstrap.css';

// import './global.css';
// import App from './components/App';

// const container = document.getElementById('app');

// ReactDOM.render(<App />, container);
const me = {
  name: "Aldhair",
  lastname: "Vera Camacho",
  age: 25,
  job: "Game Developer"
};
const element = <h1>Hey wsp nigga</h1>;
const container = document.getElementById("app");


//Using JSX
const jsx=<div>
<p>Person: {me.name} {me.lastname}</p>
<p>Age: {me.age}</p>
<p>Job: {me.job}</p>
</div>;

//Using CreateElement
const otherElement=React.createElement(
    'div',
    {},
    React.createElement('h1',{},me.name),
    React.createElement('p',{},me.age)
);


//AppendChild
//Arguments: 1 (what we want to render)
//Argument: 2 (where we want to render)
ReactDOM.render(jsx, container);
ReactDOM.render(otherElement, container);
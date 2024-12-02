import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", { id: "heading" }, "Hello world from React!");
console.log(heading);
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);


const jSXheading = (<h1 id="heading" className="head" tabIndex="5">h1 from JSX</h1>);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jSXheading);
console.log(jSXheading)


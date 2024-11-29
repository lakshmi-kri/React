// const heading = React.createElement("h1", { id: "heading" }, "Hello world from React!");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement('div', { id: "parent" },
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "I am h1 Tag"), React.createElement("h2", {}, "I am an h2 tag")]),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "I am h1 Tag"), React.createElement("h2", {}, "I am an h2 tag")])]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);    
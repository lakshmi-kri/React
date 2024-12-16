#Hello React..

//.....React element......
const heading = React.createElement("h1", { id: "heading" }, "Hello world from React!");
console.log(heading);

//......React emement using JSX......
const jSXheading = (<h1 id="heading" className="head" tabIndex="5">h1 from JSX,First Element</h1>);
const secondElement = (<h1>{jSXheading}secondElement</h1>);
console.log(jSXheading);

//......React functional component......
//you can inject any JS code inside this {}
number = "10000"
const HeadingComponent = () => (
<div id="container">
<Title />
<h2>{secondElement}</h2>
<h1 className="heading">Hello React heading component</h1>
</div>
);

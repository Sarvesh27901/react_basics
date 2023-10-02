// String interpolation in react

var React=require("react");
var ReactDom =require("react-dom");

const fullName = "sarvesh Pathak";

ReactDom.render(
  <div>
    <h1> Hi {fullName} </h1>
  </div>,
  document.getElementById("root")
)

//or

var React=require("react");
var ReactDom =require("react-dom");

const fullName = "sarvesh Pathak";

ReactDom.render(
  <div>
    <h1> Hi {`${fullName}} </h1>
  </div>,
  document.getElementById("root")

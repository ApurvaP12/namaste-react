
//Example 1: Hello World 
const heading = React.createElement(
    "h1", 
    {id: "heading", class:"heading"}, 
    "Hello world from React!");

//Example 2: Nested div sturture Parent and Child
//  <div id="parent">
//   <div id="child">
//   {/* Siblings */}
//     <h1>Hi I'm H1 tag from children</h1>
//     <h2>Hi I'm H2 tag from children</h2>
//   </div>
// </div>
//  <div id="parent">
//  <div id="child">
//  {/* Siblings */}
//    <h1>Hi I'm H1 tag from children</h1>
//    <h2>Hi I'm H2 tag from children</h2>
//  </div>
// </div>

const parent= React.createElement(
  "div",
  {id: "parent"},[
    React.createElement("div", {id: "children"}, 
      [
        React.createElement("h1", {id:"h1"}, "Hi I'm H1 tag from children"),
        React.createElement("h2", {id:"h2"}, "Hi I'm H2 tag from children")
      ]
    ),
    React.createElement("div", {id: "children2"}, 
      [
        React.createElement("h1", {id:"h1"}, "Hi I'm H1 tag from children"),
        React.createElement("h2", {id:"h2"}, "Hi I'm H2 tag from children")
      ]
    )
  ]
 
)

const root = ReactDOM.createRoot(document.getElementById("root"));
        

root.render(heading); 
root.render(parent); 
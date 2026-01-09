import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router";
import Header from "../src/components/Header";
import Body from "../src/components/Body";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import RestaurantCardDetails from "./components/RestaurantCardDetails";
import Error  from "./components/common/Error";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
    return(
        //Redux provider to our whole app
        <Provider store={appStore}>
            <div className="app-layout-container">
                <Header/>
                <Outlet/>
            </div>
        </Provider>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/restaurant/:resId',
                element:<RestaurantCardDetails/>
            }
        ],
        errorElement: <Error/>
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>)
root.render(<RouterProvider router={router}/>)





























// Assignment


// JSX transpiled before it reaches to JS -PArcel - Babel

// JSX Working ? 
// Babel is creating JSX convert it to React
//  JSX => React.createElement => React Element JS Object => HTML Element Render
// Check this website: https://babeljs.io/


// React Elememt
// const jsxHeading = (
//     <h2 id="heading">Namaste React using JSX</h2>
// );

// React Components
// 1) Class Based Component
// 2) Functional Component

// React Functional component:  It is a JS function which returns a JSX or React Element
// One way of writing with return keyword
//Normal function (return keyword must)
// const Title = function () {
//     return(
//         <h1 className="title">Title text component 🚀</h1>
//     )
// }

 //Component composition- to call a component inside another component
 //Arrow function
// const HeadingComponent = () => {
//     return (
//         <div id = "container">
//             {/* Call React Component */}
//             <Title/>
//             {/* Another way */}
//             {Title()}

//             {/* Call React Elememt */}
//             {jsxHeading}

//             {/* Inject JS inside JSX using {} */}
//             {console.log("Console inside jsx")}
//             <h1 className="heading">Namaste React Functional Component</h1>
//         </div>
//     )
   
// }

//Without return keyword
// const HeadingComponent2 =()=> <h1 className="heading">Namaste React using JSX</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// Render React Element
// root.render(jsxHeading)

//Render React Functional Component
// root.render(<HeadingComponent/>)




//Example 1: Hello World 

// How createElement is working?
// React.createElement => React Element JS Object => HTML Element Render

// const heading = React.createElement(
//     "h1", 
//     {id: "heading", class:"heading"}, 
//     "Hello world from React! 🚀");

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

// const parent= React.createElement(
//   "div",
//   {id: "parent"},[
//     React.createElement("div", {id: "children"}, 
//       [
//         React.createElement("h1", {id:"h1"}, "Hi I'm H1 tag from children"),
//         React.createElement("h2", {id:"h2"}, "Hi I'm H2 tag from children")
//       ]
//     ),
//     React.createElement("div", {id: "children2"}, 
//       [
//         React.createElement("h1", {id:"h1"}, "Hi I'm H1 tag from children"),
//         React.createElement("h2", {id:"h2"}, "Hi I'm H2 tag from children")
//       ]
//     )
//   ]
 
// )


        

// root.render(heading); 
// root.render(parent); 
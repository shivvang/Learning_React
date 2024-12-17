
import React from "react";
import ReactDOM from "react-dom/client"

//parsing javascript in jsx is done by using pair of curly braces and put the js variable or logic in it

// const javascriptsutff = "um i dont know what to right here"
// const component = <div>{javascriptsutff}</div> //this component is react.element
// console.log(component)

//using ternary operator to print conditionally

// const isBestCandidate ="shivang is best candidate you could ask for";

// const isStillTheBest = "no matter what shivang is still the best that you could ask for and look for"

// const isBetter = true;

// const something = <div>{isBetter?isBestCandidate:isStillTheBest}</div>


//componet vs react element

// A React Element is the smallest building block in React. 
// It is an immutable JavaScript object that describes what you want to appear in the UI.

// Key Features:
// Immutable: Once created, it cannot be changed.

// Representation of UI: It is a plain object that tells React what DOM node (or child component) should be rendered.

// Lightweight: It’s not the actual DOM; it’s just a virtual description.

// React.createElement() is a lower-level API that JSX transpiles into.



// A React Component is a reusable, stateful or stateless function or class that takes input (props) and returns React elements.

// Types of React Components:

// 1)Function Components:

// A plain JavaScript function that returns React elements.
// Can use React Hooks (like useState, useEffect) for state and side effects.
// function Greeting(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }

// 2)Class Components:

// A JavaScript class that extends React.Component.
// Has a render() method to return React elements.
// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}!</h1>;
//   }
// }

// How They Work:

// React Components encapsulate logic and behavior (e.g., state management, lifecycle methods).

// They generate React Elements during rendering.

// Example:
// function App() {
//   return <Greeting name="Shivang" />;
// }

// // `Greeting` is the component.
// // The `<Greeting />` call produces a React Element.


// const reactelement = <div>{something}</div>

// const reactcomponent = function(){
//     return reactelement;
// }

//how to use above in render either go for reactcomponent() or <reactcomponent/>

// const ReactComponent = function(){
//     return (
//         <div>
//             <p>some content</p>
//             <p>some other component</p>
//         </div>
//     )
// }
//the naming convention for component should follow the pascal case(Pascal case is a naming convention that starts all new words with an uppercase letter),


//each react component should wrap its react element inside a single parent element but why is that ?

// Virtual DOM Tree Structure
// The Virtual DOM represents the UI as a tree:

// Each element is a node in this tree.
// React expects every component to return a single root node, ensuring a well-structured tree.
// Without a single parent, React wouldn’t know how to group sibling nodes together, leading to ambiguity in the tree structure:
//Having a single parent ensures the DOM structure is predictable and manageable.
//  For example, React’s diffing algorithm (used for reconciliation) requires a clear hierarchy to efficiently compare and update the tree.


//in order to avoid always putting  elements inside a parent element you could use react fragmeents { <> content goes here</>}
//example ->
// const ReactComponent = function(){
//     return (
//         <>
//             <p>some content</p>
//             <p>some other component</p>
//         </>
//     )
// }


//es6 javascript in react

//if using curly braces then it needs to have return keyword
// const ReactComponent = ()=>{
//     return (
//         <>
//             <p>im learning react in depth <span>god bless my pooor soul</span></p>
//         </>
//     )
// }

//otherwise (valid syntax)

//we can also perform dom manipulation as we used to do

// function handleClick(){
// console.log("bro you clicked me ");
// }
// const ReactComponent = ()=><><p onClick={handleClick}>im learning react in depth <span>god bless my pooor soul</span></p></> 




//passing arguements in helper function 

function handleClick(state){
    console.log("bro you clicked me ",state);
    }

    const something ="idk somekind of text maybe"
    
    //dont pass arguement like this ,beacuse it calls the function right away (not prefered)

   // const ReactComponent = ()=><><p onClick={handleClick(something)}>im learning react in depth <span>god bless my pooor soul</span></p></> 


   //instead do the the below
   const ReactComponent = ()=><><p onClick={()=>handleClick(something)}>im learning react in depth <span>god bless my pooor soul</span></p></> 


//    Passing Arguments Dynamically
//    Using an inline arrow function:
   
//    onClick={() => handleClick(something)}
//    Creates a closure around something, ensuring that it’s available when the event handler is triggered.
//    React now has a proper function reference to call during the click event.


// Real-Life Analogy
// Think of onClick={() => handleClick(something)} like writing a note to someone that says, 
// "Call this number when you need help." The number isn't dialed until it's needed.

// In contrast, onClick={handleClick(something)} is like immediately dialing the number as soon as the note is written. 
// It’s an action happening now, rather than being deferred until later.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactComponent/>);
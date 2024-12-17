// Difference Between Default Export and Named Export
import React from "react";
import Button from "./components/Button";

// 1. Default Export

// Used to export one main value from a module.
// No curly braces {} required during import.
// You can name the import anything.
//also important thing to conider here is you can have only one default export in a module

// Example:
// File: mathUtils.js

// const add = (a, b) => a + b;
// export default add;
// File: app.js

// import sum from './mathUtils'; // Can name it `sum` or anything else
// console.log(sum(2, 3)); // Output: 5


// 2. Named Export

// Used to export multiple values from a module.
// Requires curly braces {} during import.
// Must use the exact names of the exported values.

// Example:
// File: mathUtils.js

// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;
// File: app.js

// import { add, subtract } from './mathUtils';
// console.log(add(2, 3));       // Output: 5
// console.log(subtract(5, 3));  // Output: 2



// What is children?

// children is a special prop that allows passing JSX or React components nested inside the opening and closing tags of another component.
// Commonly used for wrapping or compositional patterns.


// Example of children Prop
// Parent Component

// function Parent() {
//   return (
//     <Wrapper>
//       <p>This is child content!</p>
//     </Wrapper>
//   );
// }


// Wrapper Component

// function Wrapper({ children }) {
//   return <div className="wrapper">{children}</div>;
// }


// Rendered Output

// <div class="wrapper">
//   <p>This is child content!</p>
// </div>


// What are Props?

// Props (short for properties) are a mechanism to pass data from parent to child components.
// They are read-only and immutable.
// Props make components dynamic and reusable by customizing their behavior.

// Key Features of Props
// Data Flow: Unidirectional (Parent -> Child).
// Immutability: Cannot be modified by the child component.
// Flexibility: Can pass any type of data (strings, numbers, arrays, objects, or even functions).

// Example of Props Usage

// Parent Component

// function Parent() {
//   const message = "Hello from Parent!";
//   return <Child text={message} />;
// }

// Child Component

// function Child({ text }) {
//   return <p>{text}</p>;
// }

// Rendered Output

// <p>Hello from Parent!</p>

 const App = ()=>{
    const logClickAction = ()=>{
        console.log("yo you clicked beacuse of function prop sended to child Button element from the parent app");
    }
    return <Button logClickAction={logClickAction}>sending children prop from App</Button>
}

export default App;
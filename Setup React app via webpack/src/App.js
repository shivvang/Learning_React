
import React, { useCallback, useState } from "react";
import Button from "./components/Button";
// ### React Elements: What They Are and What They Do

// - **React Element**: 
//   A React element is a plain JavaScript object that represents a UI component. It contains information about the type of element (like `div`, `h1`, or a custom component), its properties (`props`), and its children.

// - **Immutable Nature**:
//   Yes, React elements are **immutable**. Once created, they cannot be changed. Instead of modifying the existing element, React creates a new element whenever there are changes.

// ### Why Immutability?

// 1. **Predictability**: Immutable objects ensure the state or props don't change directly, leading to fewer bugs.
// 2. **Performance Optimization**: React uses **reconciliation** and **Virtual DOM** to efficiently update the UI. By comparing the previous and new element trees (via `diffing`), React minimizes DOM updates.
// 3. **Debugging Ease**: Immutable structures make it easier to track and debug changes over time.

// ### What Happens When Changes Occur?

// 1. **Recreation of React Elements**:
//    - React doesn't modify elements in place. For any update (e.g., state/prop change), it creates a new element tree.
//    - Example: If `props` change for a component, React generates a new element representing the updated UI.

// 2. **Reconciliation Process**:
//    - React compares the new and previous Virtual DOM trees.
//    - Only the changed parts are updated in the actual DOM, making updates efficient.

// 3. **Component Lifecycle**:
//    - When changes trigger a new element, React determines if it needs to **re-render** the component or just update parts of the DOM.
//    - Functional components re-execute the function body. Class components may run lifecycle methods like `shouldComponentUpdate` to control rendering.

// ### Why is This Approach Beneficial?

// 1. **Efficiency**: The Virtual DOM and diffing algorithm ensure React minimizes expensive DOM manipulations.
// 2. **Consistency**: Immutable updates ensure a clear, unidirectional data flow, avoiding unexpected side effects.
// 3. **Scalability**: Makes large applications easier to manage by maintaining predictable behavior.

// ### Key Takeaways:
// - React elements are **immutable** and **lightweight objects** that describe the UI.
// - React handles updates by **recreating elements**, **comparing them (diffing)**, and **efficiently updating the real DOM**.
// - This immutability and reconciliation process ensures performance, scalability, and a predictable development experience.





// React Hooks: What They Are and How They Work

// What Are Hooks? Hooks are special functions introduced in React 16.8 that let you use state and lifecycle features in functional components
//  without needing class components. Examples include useState, useEffect, useMemo, and useReducer.

// What Hooks Do: Hooks allow components to "hook into" React's internals:

// State Management: useState gives functional components a way to manage local state.
// Side Effects: useEffect allows you to run code in response to lifecycle events like mounting, updating, or unmounting.
// Performance Optimization: useMemo and useCallback help memoize values and functions to avoid unnecessary recalculations or re-renders.


// How React Hooks Work Under the Hood

// Hooks and Immutable React Elements:

// React elements remain immutable, and hooks do not change this behavior.
// When a component's state (via useState) or props update, React creates a new element for the component with the updated state or props.
// This new element triggers the reconciliation process and updates the DOM efficiently.
// Recreation and Persistence of State:

// Hooks like useState persist values between renders by using an internal array within React's fiber tree.
// Even though the component function re-runs on every render, the state values are preserved because React links the state to the component instance in the fiber.
// Effect Execution:

// With useEffect, React schedules the effect to run after rendering, ensuring the DOM updates are already applied. 
// Effects can depend on values (dependency array) and clean up old resources when dependencies change.


// Is it True That Hooks Cause Components to Re-render?
// Not exactly:

// State Changes Cause Re-renders: Hooks like useState cause the component to re-render when the state value changes.
// Props Changes Trigger Re-renders: If the parent component passes new props, the child re-renders.
// Avoiding Unnecessary Re-renders:
// Use React.memo to skip rendering if props haven't changed.
// Use useCallback or useMemo to memoize functions or computations.

//useState hook im here 

// useState in React: Deep Dive

// What is useState?

// useState is a React Hook that allows functional components to have stateful logic. It enables components to remember values between renders
//  and triggers re-renders when the state updates.

// Syntax

// const [state, setState] = useState(initialValue); (always use state hooks at top level of your functional component ) (use this only for visual changes in screen or jsx)

// state: The current value of the state.
// setState: A function to update the state.
// initialValue: The default state value (can be a primitive, object, or function).
// Key Behaviors
// Triggers Re-render:

// Calling setState queues a re-render for the component.
// React ensures the component's DOM is updated with the new state via the reconciliation process.
// State Persistence:

// State persists across re-renders but resets when the component unmounts.

// Batching Updates:(very important)

// React batches multiple setState calls in event handlers to optimize rendering.


// Common Mistakes

// Recreating State in Loops:

// Avoid calling useState conditionally or in loops; it must always execute in the same order.

// Using Functions in setState:

// Use the functional form when the new state depends on the previous one:

// setState((prevState) => prevState + 1);


// Over-reliance on Derived State:

// Don’t store derived state; compute it dynamically in JSX.

//an example of how we would use it 
//  const App = ()=>{
//  const [jobstatus,setJobStatus] = useState("you have to get job or internship")
//    const hanldechanges = ()=>{
//     setJobStatus("you will get something eventually be patient");
//    }
//     return (
//         <div>
//             <p>{jobstatus}</p>
//             <button onClick={hanldechanges}>updates?</button>
//         </div>
//     )
// }


//dp this when you have new state variable depending on previous state


//important things to note :-

//using callback function of set state can help us get the idea of what was the previous state of the compoenent
//so this state updates are asynchronous ,set of updates are batched and react doesnt wait for any updation(this is applicable for all the states)
//so this state updation re creates the whole component and from  this we learn that state updation is costlier method and is not supposed to be taken lightly off


//key insights from here

//external component used in this component is also rendered ,because as previously we learned that props ,and state variable changes re redner the component 
//that is the reason why Button.js is also re reendered and as well

//how to avoid this re render in Button.js
// memo-> wont work as prop is changing each time ,//memo lets you skip the render whent is props are not changed(but props here did changed so didnt work out)
//use callback ->useCallback will return a memoized version of the callback that only changes if one of the inputs has changed.

//im going to be learning about both of this hooks in coming days
const App = ()=>{
    const [jobOffer,setJobOffer] = useState(0)
    //what use callback does here is it avoid the recreation of this function handle changes
    //before this react was recreating this function to share update now recreation is stopped
      const hanldechanges =useCallback( ()=>{
        console.log("before state update value", jobOffer);
       setJobOffer((prev)=>{
        console.log("previous state of this component",prev);
        return prev+1;
       })
       console.log("after state update value", jobOffer);
      },[])
       return (
           <div>
               <p>{jobOffer}</p>
               <Button onClick={hanldechanges}>how many job offers?</Button>
           </div>
       )
   }
   

export default App;
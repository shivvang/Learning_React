
import React, { useCallback, useState } from "react";
import Button from "./components/Button";


//key learning react fiber ,reconciliation ,virtual call stack

// visit this for more info https://github.com/acdlite/react-fiber-architecture


//whenever react renders  it creates a tree like structure

//this tree like structure is compared to previously created tree and out of which minimal amount of changes are made(two tress new and previous tree,this tree are virtual doms)

//so below is how it does what it does

// React Reconciliation
// What is it?
// Reconciliation is React’s algorithm to update the DOM by efficiently determining the minimal set of changes required when state or props change.

// What it does:

// Diffing Algorithm: Compares the previous Virtual DOM tree with the current one to identify changes.
// DOM Updates: Applies updates to the actual DOM only where differences exist.

// Effects Produced:

// Performance Optimization: Avoids unnecessary DOM updates, making React fast.
// Consistency: Maintains a predictable rendering process by efficiently applying updates.
// Component Keying: Optimized for lists by using unique key props to avoid mismatching elements during updates.


// The key points are:

// In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
// Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
// A push-based approach requires the app (you, the programmer) to decide how to schedule work.
//  A pull-based approach allows the framework (React) to be smart and make those decisions for you.
// React doesn't currently take advantage of scheduling in a significant way;
//  an update results in the entire subtree being re-rendered immediately. 
// Overhauling React's core algorithm to take advantage of scheduling is the driving idea behind Fiber.


// primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

// pause work and come back to it later.
// assign priority to different types of work.
// reuse previously completed work.
// abort work if it's no longer needed.


// The way computers typically track a program's execution is using the call stack.
//  When a function is executed, a new stack frame is added to the stack. 
// That stack frame represents the work that is performed by that function.

// When dealing with UIs, the problem is that if too much work is executed all at once,
//  it can cause animations to drop frames and look choppy. What's more, some of that work may be unnecessary

//important note
// That's the purpose of React Fiber. Fiber is reimplementation of the stack, specialized for React components.
//  You can think of a single fiber as a virtual stack frame.



// React Fiber(virtual stack frame)
// What is it?
// React Fiber is the reimplementation of React's core algorithm introduced in (React 16). It uses a fiber architecture to efficiently manage rendering and updates.

// What it does:

// Prioritizes Rendering: Breaks rendering into units of work that React can pause, resume, or abort.
// Concurrent Mode: Enables smooth animations, responsiveness, and multitasking by scheduling high-priority tasks first.
// Reusability: Uses a tree of "fiber nodes" to track the state and work required for each component.
// Effects Produced:

// Incremental Rendering: Divides large tasks into smaller chunks to avoid blocking the main thread, improving performance.
// Better User Experience: Guarantees interactive UI updates by ensuring urgent tasks (e.g., animations) run before less critical ones.
// Error Recovery: React Fiber handles errors gracefully with improved recovery mechanisms.


// Key Relationship Between Fiber and Reconciliation
// Fiber handles the scheduling, 
// while reconciliation determines the updates. Together, 
// they ensure smooth and efficient UI updates even under heavy workloads.

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
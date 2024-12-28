import React ,{useEffect, useLayoutEffect, useRef, useState} from 'react'
import {createPortal, prefetchDNS} from "react-dom"

// React Portal



// ### 📚 **What is React Portal?**  
// - A feature in React to **render child components outside the DOM hierarchy** of their parent component.  
// - It allows rendering components into a **different DOM node**, usually outside the root `div`.  

// ---

// ### 🎯 **Why Use React Portal?**  
// - **Avoid CSS issues:** Prevents unwanted side effects from parent styles (e.g., `overflow: hidden`).  
// - **Better DOM structure:** Ideal for modals, tooltips, dropdowns, etc.  
// - **Escape z-index conflicts:** Ensures UI elements aren’t hidden under parent containers.  

// ---

// ### 🛠️ **Where to Use It?**  
// - **Modals & Dialogs**  
// - **Tooltips**  
// - **Dropdowns**  
// - **Floating Components**  

// ---

// ### ⚙️ **Syntax**  
// ```jsx
// import ReactDOM from 'react-dom';

// const PortalExample = () => {
//   return ReactDOM.createPortal(
//     <div>Rendered outside root!</div>, // JSX content
//     document.getElementById('portal-root') // Target DOM node
//   );
// };
// ```

// - `ReactDOM.createPortal(child, container)`  
//    - **child:** React node (e.g., JSX)  
//    - **container:** DOM node to render into  

// ---

// ### ⚡ **Does it Affect Performance?**  
// - **No significant performance hit** when used correctly.  
// - **Re-renders follow the same React lifecycle** as if rendered in the parent DOM tree.  

// ---

// ### ✅ **Key Takeaways:**  
// - **Not a hack; it's an official React feature.**  
// - Useful for **better UI management** in complex layouts.  
// - Avoids **z-index and parent style issues.**  



// What is useRef?

// A React hook used to create a mutable reference to a DOM element or a value.
// Does not trigger re-renders when its value changes.

// 🎯 Why Use useRef?
// Access DOM elements directly without document.querySelector.
// Persist values across renders without causing re-renders.
// Store previous values for comparisons.

// 🛠️ Where to Use It?
// Accessing DOM nodes: Focus input fields, manipulate elements.
// Persisting state between renders: Store timer IDs, previous state, etc.
// Avoiding unnecessary re-renders: Store mutable values outside the render cycle.

// ⚙️ Syntax
// jsx
// Copy code
// import { useRef, useEffect } from 'react';

// function Example() {
//   const inputRef = useRef(null); // Create a ref

//   useEffect(() => {
//     inputRef.current.focus(); // Access DOM node
//   }, []);

//   return <input ref={inputRef} placeholder="Focus me on load" />;
// }


// const ref = useRef(initialValue)
// initialValue: Initial value of the ref (null for DOM refs).
// ref.current: Mutable reference to the value or DOM node.

// ⚡ Key Behaviors:
// Mutable & Persistent: Holds its value across renders.
// Doesn’t Cause Re-renders: Updating ref.current won’t trigger a re-render.
// Can Store Any Value: Not just DOM nodes, but objects, timers, etc.

// ✅ Key Takeaways:
// Ideal for DOM manipulations and persisting mutable values.
// Prevents unnecessary re-renders when managing values outside the React state.
// Think of it as a “box” to store a value without causing reactivity.


// When React updates the DOM, useEffect and useLayoutEffect determine when side effects run relative to the browser's rendering process. 

// With useEffect, the browser first paints the updated DOM and then runs the effect. This means any DOM manipulations or style changes 
// inside useEffect might cause a visible flicker or jitter since the browser has already displayed the initial state.

// On the other hand, useLayoutEffect runs synchronously after the DOM updates but before the browser paints. 
// This ensures that any DOM calculations or style changes are applied before anything becomes visible on the screen,
//  eliminating flickers and creating a smoother visual experience.

// In short, useEffect is ideal for non-visual side effects like fetching data or logging, while useLayoutEffect is better suited for synchronizing DOM measurements,
//  animations, or style adjustments that need to happen before the screen updates. 🚀

const Tooltip = ({children,targetPosition}) => {
    const tooltipref = useRef(null);
    const {left,top,right,bottom} = targetPosition;

    const [tooltipheight,setooltipheight] = useState(0);

    let x  = 0
    let y = 0

    let now = performance.now();
    while (performance.now() - now < 400)  {
        //render block code
    }

    if(targetPosition!==null){
        x=left
        y=top - tooltipheight
        console.log("the height here we have before the running use effect",tooltipheight)
        if(y<0){
            y = bottom
        }
    }

    //repaint blocking effecet ,
    useLayoutEffect(() => {
        const {height} = tooltipref.current.getBoundingClientRect();
        setooltipheight(height);
        console.log(height);
    },[])

  return (
    createPortal( <div  ref={tooltipref} style={{
        position: "absolute",
        pointerEvents: "none",
        left: 0,
        top: 0,
        transform:`translate3d(${x}px ,${y}px,0)`
    }}>{children}</div>,document.body)
  )
}

export default Tooltip
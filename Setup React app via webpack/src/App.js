
import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import Timer from "./components/Timer";
import BtnToolTIp from "./components/BtnToolTIp";

//useLayoutEffect

// useLayoutEffect is a React Hook that allows you to perform side effects synchronously after the DOM mutations but before the browser has a chance to paint. 
// This means the updates made inside this hook will block the browser's rendering, ensuring that the user sees a consistent state.

// Key Points

// What it does:

// Similar to useEffect, it lets you perform side effects (e.g., DOM manipulation, subscription setup).
// It fires after the DOM updates but before the browser paints.

// Parameters:

// useLayoutEffect(callback, dependencies)
// callback: A function containing the effect logic.
// dependencies: An array of variables that the effect depends on. If any of these variables change, the effect re-runs.


// Why it does what it does:

// React batches DOM updates to improve performance. Sometimes, you need to adjust the DOM synchronously after React updates it to ensure the layout is correct 
// before the user sees the UI. This is why useLayoutEffect runs before the browser paints, ensuring there’s no visual flicker.

// Comparison with useEffect
// Feature	                useEffect	                                             useLayoutEffect
// Execution Timing	    After browser paint (asynchronous)	            Before browser paint (synchronous)
// Impact on Rendering	Non-blocking; doesn't affect UI rendering.	Blocking; prevents UI rendering until done.
// Primary Use Case	   API calls, logging, subscriptions, etc.	   DOM measurement, synchronizing layouts.



// Advantages of useLayoutEffect

// Accurate Layout Adjustments: Ensures DOM measurements are taken after updates but before paint.
// Prevents Flickering: Changes made in this hook are visible immediately during the first paint.
// Useful for Animations: When precise timing between DOM changes and animations is required.

// Disadvantages of useLayoutEffect

// Blocks Rendering: Since it runs synchronously, it can delay rendering and degrade performance.
// Complexity: Misusing it can lead to subtle bugs, especially when overused or unnecessary.
// Not Always Needed: For many use cases, useEffect suffices and is more performant.


//When to Use useLayoutEffect
// When you need to synchronize DOM changes with React updates.
// When you need to measure the DOM (e.g., get dimensions or position of elements).
// When the UI needs to appear consistent without flickers during the initial render.


// Real-Life Analogy
// Imagine you're decorating a room before a surprise party:

// useEffect: You let the guests enter the room and then adjust the decorations. Some might notice the adjustments being made.

// useLayoutEffect: You finish decorating the room entirely before the guests enter, ensuring they only see the final look.


//example of this in BtnToolTIp.js

 const App = ()=>{
    const[counter,setCounter] = useState(0);
    const[show,setShow] = useState(true);
    useEffect(() => {
        console.log(`im running ${counter} time only`)
    },[counter])
       return (
        
        <div>
          <h1>some things just dont workout sometimes bro </h1>
          <Button setCounter={setCounter}>click for {counter} year's of succes in life </Button>
          <br/>
          {show &&<Timer sometext="idk what to write here bro"/>}
          <br/>
          <button onClick={()=>setShow(()=>!show)}>do not dispaly timer</button>

          <br/>
          <BtnToolTIp ttcontent={<div>this doesnt fit above the button <br/> This is why it is displayed  below instead</div>}>
          Hover Over Me Bro
          </BtnToolTIp>
          </div>
        
       )
   }
   

export default App;
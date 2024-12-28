
import React, { useRef, useState } from "react";
import Timer from "./components/Timer";
import Input from "./components/Input";



//local variable doesnt change at all because it is not persistent ,and is initialize to zero after every re render
//ref  variable has a  property of persisting value accross all the  render cycle  and this does not causes re render
//state variable has a property to perist value in render cycles and also cause state change as well which causes re render


// 📌 ref Attribute in HTML
// Used to directly reference a DOM element.
// Commonly applied in frameworks like React for manipulating DOM nodes or getting their values.
// Example: <input ref="myInputRef" /> (React-specific syntax).


// 📌 useRef in React

// What: A React hook (useRef) that creates a mutable reference object ({ current: ... }) that persists across renders.
// Syntax:

// const myRef = useRef(initialValue);
// Why Use: Access DOM elements directly or store values without triggering re-renders.
// Real-Life Analogy: A bookmark in a book — quickly lets you access a specific page without flipping through every page.

// Example:


// import { useRef } from 'react';

// function FocusInput() {
//   const inputRef = useRef(null);
//   const focusInput = () => inputRef.current.focus();

//   return <input ref={inputRef} />;
// }


// 📌 forwardRef in React

//forwardRef lets your component expose a DOM node to parent component with a ref.

// What: A function to pass ref from a parent to a child component.

// Syntax:

// const Child = React.forwardRef((props, ref) => (
//   <input ref={ref} {...props} />
// ));

// Why Use: Enables parent components to directly access child DOM nodes or React components.
// Real-Life Analogy: A middleman delivering a package to the intended recipient.

// Example:

// const InputField = React.forwardRef((props, ref) => (
//   <input ref={ref} {...props} />
// ));

// function Parent() {
//   const inputRef = useRef(null);
//   return <InputField ref={inputRef} />;
// }

// 📌 useRef vs State Variables

// useRef	State Variable
// Doesn't cause re-renders.	Triggers re-renders on update.
// Used for direct DOM manipulation.	Used for UI state management.
// Mutable (ref.current).	Immutable; updates require setter function.

// 📌 Key Properties of useRef:
// current: Stores the reference value.
// Mutable: Can update .current without re-rendering.
// Persistent: Value persists across renders.

// When to Use:

// Accessing DOM nodes directly.
// Storing mutable values without causing re-renders.



 const App = ()=>{
   let mylocal=0;
   const ref =  useRef(0);
   const [mycount,setMyCount] = useState(0);
   const inputref = useRef(null);
       return (
        
       <>
         <button onClick={()=>{
            mylocal+=1;
         }}>Change local variable</button>
         <button onClick={()=>{ref.current+=1}}>Change ref</button>
         <button onClick={()=>setMyCount((prev)=>prev+1)}>Change state variable</button>

         <div>
            <span>Local var:{mylocal}</span><br/>
            <span>ref var:{ref.current}</span><br/>
            <span>state var:{mycount}</span>
         </div>
         <h4>one more crazy example of use ref</h4>
         <Timer sometext="Click Me To Stop Timer"/>

         <h3>dom manipulation using ref</h3>
         <Input ref = {inputref}/> <br/>
         <button onClick={()=>[
            inputref.current.focus()
         ]}>click me to foucs on input</button>
       </>
        
       )
   }
   

export default App;
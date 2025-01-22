
import React, {useState } from "react";
import {createPortal} from "react-dom"


// 📌 What is createPortal?
// createPortal is a React feature that renders a component outside its parent DOM hierarchy while still keeping React’s state and event handling.

// 📌 Why Use React Portals?
// 🔹 Avoid CSS issues – Some components (e.g., modals, tooltips) might get hidden due to overflow: hidden in a parent container. Portals help bypass this restriction.
// 🔹 Prevent z-index conflicts – Modals or popups inside deeply nested elements might have CSS issues due to stacking contexts.
// 🔹 Maintain accessibility – Portals let you place elements where they logically belong in the DOM (e.g., a modal inside <body>, not inside a deeply nested component).
// 🔹 Improve performance – Moving elements outside a complex DOM tree avoids unnecessary re-renders of parent components.

// 📌 Syntax of createPortal

// createPortal(child, container);

// child – The React component or element to render.

// container – The DOM node where it should be rendered.


const App = () => {
  const [state, setState] = useState(false);
  return (
    <div>
       do something epic idk why
       <button onClick={()=>setState((prev)=>!prev)}>click me to do something idk</button>
       {state && createPortal(<div>see this shit bro </div>,document.body)}
    </div>
  )
}

export default App;

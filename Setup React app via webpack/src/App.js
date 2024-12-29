
import React, { useState } from "react";
import SecondComp from "./components/SecondComp";


//problem statement:-

//The problem arises because whenever the count state is updated, 
// it causes this component to re-render, which in turn re-renders the second component, 
// eventually leading to the recreation of the third component — a very slow component.


//To prevent this, we need to stop the recreation of the third component, as it’s the reason why state updates have become slower.
//Looking at the code structure, we notice that the second component is passing props. From previous concepts, we know that memo can help here because the props aren’t changing, 
// and therefore, they won’t trigger a re-render.

//However, the problem persists because the handleClick function is recreated every time the state updates.
//By using useCallback on handleClick, we can prevent it from being recreated on every render, essentially caching it to avoid unnecessary rendering of the third component.

//Now, the first counter works faster because, although the state in the App component changes and causes a re-render,
//the handleClick function in the SecondComp remains unchanged. This prevents the recreation of the third component.



// useCallback in React
// What: A React hook that memoizes a function to prevent unnecessary re-creations on every render.

// Syntax:

// const memoizedCallback = useCallback(() => {
//   // Your logic here
// }, [dependencies]);

// Why Use: To optimize performance by avoiding re-creation of functions unless dependencies change.

// Real-Life Analogy: A pre-saved shortcut on your desktop — it only updates when the path (dependencies) changes.

// Example:

// import React, { useState, useCallback } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   return <button onClick={increment}>Increment</button>;
// }


// 📌 When to Use useCallback:
// Passing functions as props to child components (to prevent unnecessary re-renders).
// Avoiding function re-creation on every render.

// 📌 useCallback vs useMemo:
// useCallback	                  useMemo
// Returns a memoized function.	Returns a memoized value.
// Used for functions.	         Used for expensive calculations.

// 📌 Key Properties of useCallback:
// Memoization: Stores the function reference.
// Dependencies Array: Only updates if dependencies change.
// Performance Optimization: Reduces unnecessary renders of child components.

 const App = ()=>{
   const [count1 ,setCount1] = useState(0);
   const [count2 ,setCount2] = useState(0);
       return (
        
       <>
       {count1} times is how many times im gonna fail and get back up
       <br/>
       <button onClick={()=>setCount1((prev)=>prev+1)}>click me to add more challanges to your life</button><br/>

       {count2} times is how many times im gonna fail and get back up
       <br/>
       <button onClick={()=>setCount2((prev)=>prev+1)}>click me to add more challanges to your life</button><br/>
       <SecondComp count1 = {count1}/>
       </>
        
       )
   }
   

export default App;
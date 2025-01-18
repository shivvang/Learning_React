
import React, { useState,useMemo } from "react";
import PrintTable from "./components/PrintTable";

// What is memo?

// memo is a React Higher-Order Component (HOC) that prevents unnecessary re-renders by memoizing a component.

// What does it do?

// Skips re-rendering if the component’s props haven’t changed.
// Works only for functional components.

// How is it different from useMemo?

// memo caches the entire component to prevent unnecessary re-renders.

// useMemo caches values inside a component to avoid recomputation.


// What is Caching in memo?

// Stores the last rendered output of a component.

// If props haven’t changed, React reuses the cached version instead of re-rendering.

// Syntax

// import React, { memo } from 'react';

// const MyComponent = memo(({ value }) => {
//   console.log("Rendered");
//   return <div>{value}</div>;
// });


// MyComponent only re-renders when value changes.

// Analogy
// Without memo: Like redrawing the same painting every time you see it.
// With memo: You save a copy and just look at it when needed, avoiding extra work.


// Concise Summary

// memo prevents re-renders if props haven't changed.
// Optimizes performance by avoiding unnecessary updates.
// Works for functional components and is useful when a parent re-renders frequently.


// Minimizing props changes (important pls note this) 

// When you use memo, your component re-renders whenever any prop is not shallowly equal to what it was previously. 
// This means that React compares every prop in your component with its previous value using the Object.is comparison. 
// Note that Object.is(3, 3) is true, but Object.is({}, {}) is false.

// To get the most out of memo, minimize the times that the props change. 
// For example, if the prop is an object, prevent the parent component from re-creating that object every time by using useMemo:



// Problem: When counter1 updates, PrintTable takes time to re-render. However, when counter2 updates, React still re-renders PrintTable unnecessarily, even though num hasn't changed.

// Why? By default, when a component re-renders, all its child components also re-render unless optimized.

 const App = ()=>{
   const [counter1, setCounter1] = useState(0)
   const [counter2, setCounter2] = useState(0)

   const obj={drugs:"yeswhynot"};
   const arr = useMemo(()=>[1,2,3,4,5,6],[]);
   //after memoizing this arr this problem object is solved as this ,component when mounts it makes the array once ,and then if re renders are caused
   //then it see no value change so it reamins same as it was 
   
   const val =1;
       return (
        
       <>
      {counter1} counter1 <br/>
      <button onClick={()=>setCounter1((prev)=>prev+1)}>incrment counter1</button><br/>
      {counter2} counter2 <br/>
      <button onClick={()=>setCounter2((prev)=>prev+1)}>incrment counter2</button><br/>
      <PrintTable num={counter1} arrrr={arr}/>
       </>
        
       )
   }
   

export default App;
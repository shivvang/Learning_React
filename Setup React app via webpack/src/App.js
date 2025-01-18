
import React, { useState } from "react";
import PrintTable from "./components/PrintTable";

// React useMemo Hook

// What is useMemo?

// useMemo is a React Hook that caches the result of a function to optimize performance. It recomputes only when dependencies change, preventing unnecessary recalculations.

// What does it do?

// Speeds up performance by avoiding expensive calculations on every render.
// Caches the computed value until dependencies change.

// What is a Pure Function?
// A function that always returns the same output for the same input.
// Has no side effects (doesn’t modify variables outside its scope).

// What is Caching in useMemo?
// Stores computed values instead of recalculating them on every render.
// Uses memoization to return the previous result if inputs are unchanged.

// Syntax

// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
// Runs computeExpensiveValue(a, b) only if a or b changes.
// If dependencies don’t change, React reuses the previous result.

// Analogy

// Without useMemo: Like reordering your entire bookshelf every time you search for a book.
// With useMemo: You remember the book’s location and directly grab it, saving time.

// Concise Summary

// useMemo caches expensive calculations and recomputes only when dependencies change.
// Improves performance by avoiding unnecessary recalculations.
// Works on pure functions that return the same output for the same input.





// Problem: When counter1 updates, PrintTable takes time to re-render. However, when counter2 updates, React still re-renders PrintTable unnecessarily, even though num hasn't changed.

// Why? By default, when a component re-renders, all its child components also re-render unless optimized.

// Using React.memo: Reduces unnecessary re-renders but doesn’t prevent expensive function execution.

// Using useMemo: Caches the computed table, so it doesn’t recompute when counter2 updates, significantly improving performance.
 const App = ()=>{
   const [counter1, setCounter1] = useState(0)
   const [counter2, setCounter2] = useState(0)
       return (
        
       <>
      {counter1} counter1 <br/>
      <button onClick={()=>setCounter1((prev)=>prev+1)}>incrment counter1</button><br/>
      {counter2} counter2 <br/>
      <button onClick={()=>setCounter2((prev)=>prev+1)}>incrment counter2</button><br/>
      <PrintTable num={counter1}/>
       </>
        
       )
   }
   

export default App;
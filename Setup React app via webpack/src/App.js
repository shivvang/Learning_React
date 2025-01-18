
import React, { lazy, useState,Suspense} from "react";
const PrintTable = lazy(()=>import("./components/PrintTable"))

//problem statement over here is we are rendering the print table componet here even though its only visbile when coutner 5 ,now this increase the loadin time
//in order to avoid this we will lazy load ,this compoent 



// React lazy & Suspense

// What is lazy?

// lazy defers loading a component until it’s needed.
// Helps reduce initial load time by splitting code.

// What is Suspense?

// Displays a fallback UI while the lazy-loaded component is being fetched.

// Why Use Lazy Loading?
// Avoids loading unnecessary components upfront.
// Improves performance & user experience.
// Ideal for large components used conditionally.

// When to Use?
// Heavy components (e.g., charts, large tables).
// Rarely used features (e.g., modals, tooltips).
// Conditionally rendered components (e.g., tabs, hidden sections).

// Syntax
// import React, { lazy, Suspense } from "react";

// const MyComponent = lazy(() => import("./MyComponent"));

// <Suspense fallback={<div>Loading...</div>}>
//   <MyComponent />
// </Suspense>

// lazy(() => import(...)): Loads the component only when it’s needed.
// Suspense fallback={<div>Loading...</div>}: Shows fallback while loading.

// Analogy
// Without lazy loading: Downloading all movies at once before watching.
// With lazy loading: Streaming only the movie you choose, saving bandwidth.

// Concise Summary
// lazy defers component loading to improve performance.
// Suspense displays a fallback UI while loading.
// Best for heavy, rarely used, or conditionally rendered components.

 const App = ()=>{
   const [counter1, setCounter1] = useState(0)
  
       return (
        
       <>
      {counter1} counter1 <br/>
      <button onClick={()=>setCounter1((prev)=>prev+1)}>incrment counter1</button><br/>
      { counter1 > 5 && <Suspense fallback={<div>yo im here before print table is</div>}> <PrintTable num={counter1}/> </Suspense> }
       </>
        
       )
   }
   

export default App;
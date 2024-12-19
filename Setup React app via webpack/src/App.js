
import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import Timer from "./components/Timer";
//UseEffect

// What is useEffect?

//useEffect is a React Hook that lets you synchronize a component with an external system.

// Syntax of useEffect
// useEffect(effectFunction, dependencyArray);

//What does it do?
// It runs the effectFunction after the component renders or when specific values in the dependencyArray change.

// Handles tasks outside the React rendering process (e.g., API calls).

// Why does it do this?

// React aims to keep the UI consistent with the state. useEffect ensures side effects don't disrupt this flow and are performed only at appropriate times.


// Parameters of useEffect

// effectFunction

// The main logic to execute (e.g., API calls).
// Can return a cleanup function to undo side effects.

// useEffect(() => {
//   const interval = setInterval(() => console.log("Tick"), 1000);
//   return () => clearInterval(interval); // Cleanup
// }, []);


// dependencyArray

// Controls when effectFunction runs.
// Empty ([]): Run only once (on mount).
// Values ([a, b]): Run whenever any value changes.
// Omitted: Run after every render (not recommended).


// Real-Life Analogy

// Think of useEffect as a task scheduler in your house:

// Effect function: You water plants in the garden.

// Dependency array: It only happens when the soil gets dry (dependency).

// Cleanup: After watering, you turn off the hose (cleanup).

// This ensures you don’t waste water or overdo it.



//useffect in action
//with no dependency it re runs 
//when a dependency passed it runs each time the depency value changes thats for sure this values can be any variable ,state variable,functions ,we can pas props etc
//when simply depency array is passed it runs only when the componenet mounts
//writing a clean up function has to be most cruical part for  use effect other wise it will keep on running ,(memory leak scenario)

//clean up funciton wil run for evry type of useffect whether it has depency elements in the dependcy array ,or it is only running during mount etc
//so the clean up function run only once  ohk 
//for the example of it go to Timer.js


//very important
//important thing to note here is if we have like hundered of useffect in the component and if  component is unmounted ,then each and every other useeffect function clean up fucntion will be triggered
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
          </div>
        
       )
   }
   

export default App;
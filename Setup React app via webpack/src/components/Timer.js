import React, { useEffect,useRef,useState } from "react";
const Timer =({sometext})=>{

    //reason why we use ref here instead of let variable beacuse after every render the let variable would be undefined causing it to mess thing up so bad
    const interval = useRef(null);

    const [counter,setCounter] = useState(0);
    //writing a clean up function has to be most cruical part for this use effect other wise it will keep on running ,(memory leak scenario)
    useEffect(()=>{
      
         interval.current = setInterval(()=>{setCounter((prev)=>prev+1)},1000)
        
        return ()=>{
           
            clearInterval(interval.current);
    
        }
    },[])

    // useEffect(()=>{
    //     console.log("yo im running to")

    //     return ()=>{
    //         console.log("i stopped running got cleaned up beacause the component unmounted")
    //     }
    // },[sometext])

    // useLayoutEffect(()=>{
    //     console.log("im the one who runs first and blocks stuff until im finsihed");
    // },[])

    const stoptime = ()=>{
        clearInterval(interval.current);
    }
    return(
        <>
        <span>{counter} seconds passed till the page refereshes </span>
        <br/>
        <button onClick={stoptime}>{sometext}</button>
        </>
    );
}

export default Timer;
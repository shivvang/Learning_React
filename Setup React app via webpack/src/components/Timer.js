import React, { useEffect, useLayoutEffect, useState } from "react";

const Timer =({sometext})=>{
    const [counter,setCounter] = useState(0);
    //writing a clean up function has to be most cruical part for this use effect other wise it will keep on running ,(memory leak scenario)
    useEffect(()=>{
        console.log("i am running still")
        const interval = setInterval(()=>{setCounter((prev)=>prev+1)},1000)
        console.log("interaval id ",interval);
        return ()=>{
            console.log("ohk i have stopped running bro chill component unmounted");
            clearInterval(interval);
            console.log("interaval id after being removed ",interval);
        }
    },[])

    useEffect(()=>{
        console.log("yo im running to")

        return ()=>{
            console.log("i stopped running got cleaned up beacause the component unmounted")
        }
    },[sometext])

    useLayoutEffect(()=>{
        console.log("im the one who runs first and blocks stuff until im finsihed");
    },[])
    return(
        <>
        <span>{counter} seconds passed till the page refereshes </span>
        <p>{sometext}</p>
        </>
    );
}

export default Timer;
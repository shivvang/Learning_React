import React, { useMemo } from 'react'

const generateNum =(num)=>{
    const arr = []
    let startTime = performance.now();

    while(performance.now() - startTime < 800){
      //do absoutely nothing 
    }

    for(let i=1;i<=10;i++){
        arr.push(<div>{num*i}</div>)
    }
    return arr
}


const PrintTable = ({num}) => {
    const arr =useMemo(()=>generateNum(num),[num]);
  return (
    <div>{arr}</div>
  )
}

export default PrintTable
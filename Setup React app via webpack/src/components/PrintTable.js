import React, { memo } from 'react'

const generateNum =(num)=>{

   const startTime = performance.now()

   while(performance.now() -startTime < 800){
    //delay to show fallback 
   }

    const arr = []

    for(let i=1;i<=10;i++){
        arr.push(<div>{num*i}</div>)
    }
    return arr
}


const PrintTable = memo(({num}) => {
    const arr = generateNum(num);
  return (
    <>
    <div>{arr}</div>
    </>
  )
})

export default PrintTable
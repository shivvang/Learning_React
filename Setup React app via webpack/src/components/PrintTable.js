import React, { memo } from 'react'

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


const PrintTable = memo(({num,obj,val,arrrr}) => {
    const arr = generateNum(num);
  return (
    <>
    <div>{arr}</div>
    {obj?.drugs}
    {val}
    {arrrr?.map((item)=><span>{item}</span>)}
    </>
  )
})

export default PrintTable
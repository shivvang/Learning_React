import React, { memo, useState } from 'react'

const Thirdcomp = memo(({handleClick}) => {
    const [count,setCount] = useState(0);

    let starttime = performance.now();

    while(performance.now() - starttime <800) {
        // do nothing for 800ms to emulate extremely slow code
    }

    const increment = () => {
        setCount((prev)=> prev+1);
        handleClick?.();
    }  
  return (
    <>
        {count} this how much time things take to get better at something
        <button onClick={increment}>click me to take your time more</button>
    </>
  )
})

export default Thirdcomp
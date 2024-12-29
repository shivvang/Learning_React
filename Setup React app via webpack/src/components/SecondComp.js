import React, { useCallback } from 'react'
import Thirdcomp from './Thirdcomp';

const SecondComp = ({count1}) => {
    const handleClick = useCallback(() => {
        console.log("got called just now",count1);
    },[count1])
  return (
    <>
      some content form the second <br/>
      <Thirdcomp handleClick = {handleClick}/>
    </>
  )
}

export default SecondComp
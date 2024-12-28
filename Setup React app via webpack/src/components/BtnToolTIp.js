import React ,{useState,useLayoutEffect,useRef}from 'react'
import Tooltip from './Tooltip'

const BtnToolTIp = (props) => {
    const {children,ttcontent} = props;
   const [targetPosition,setTargetPosition] = useState(null);
   const buttonref = useRef(null);
   const handlemouseenter = (e) => {
    const rect = buttonref.current.getBoundingClientRect();
    setTargetPosition({
        left:rect.left,
        top:rect.top,
        right:rect.right,
        bottom:rect.bottom
    })
   }

  return (
    <>
    <button ref={buttonref} onPointerEnter={handlemouseenter} onPointerLeave={()=>{setTargetPosition(null)}}>  {children}</button>
    {targetPosition && <Tooltip targetPosition = {targetPosition}>{ttcontent}</Tooltip>}
    </>
  )
}

export default BtnToolTIp
import React from 'react'


//memo lets you skip the render whent is props are not changed
const Button = ({children,setCounter}) => {
  return (
    <button onClick={()=>setCounter((prev)=>prev+1)}>{children}</button>
  )
}

export default Button
import React ,{memo}from 'react'


//memo lets you skip the render whent is props are not changed
const Button = memo(({onClick}) => {
  console.log("am i re rendered to when used in a component that has state button.jsx")
  return (
    <button onClick={onClick}>button</button>
  )
})

export default Button
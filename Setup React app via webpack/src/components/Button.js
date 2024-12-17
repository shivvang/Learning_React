import React from 'react'

const Button = ({logClickAction,children}) => {
  return (
    <button onClick={logClickAction}>{children}</button>
  )
}

export default Button
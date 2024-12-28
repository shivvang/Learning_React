import React, { forwardRef } from 'react';


//forwardRef expects the function to accept (props, ref) as two separate arguments.
const Input = forwardRef((props, ref) => { 
  return (
    <input ref={ref} type="text" />
  );
});

export default Input;

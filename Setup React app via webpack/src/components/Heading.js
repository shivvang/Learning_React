import React, { useContext } from "react";
import { ThemeContext } from "../App"; 

function Heading() {
  const { theme, setTheme } = useContext(ThemeContext); 

  const handleChanges = () => {
    setTheme((prev) => (prev === "white" ? "black" : "white"));
  };

  return (
    <div>
      <button onClick={handleChanges} style={{ backgroundColor: theme }}>
        Click Me to See what lies in your future
      </button>
    </div>
  );
}

export default Heading;

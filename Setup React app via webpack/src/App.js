
import React, { createContext, useState } from "react";
import Text from "./components/Text";


// React Context API

// What is Context API?

// A built-in way to share state between multiple components without props drilling.
// Provides a global state that any component can access.

// Why Use Context API?
// Avoids prop drilling (passing data through multiple nested components).
// Useful when many components need access to the same state.
// Simpler than Redux for small-to-medium state management needs.

// How Does It Work?
// Creates a Context → Provides a shared state.
// Provider Component → Wraps the components that need access to the state.
// Consumer/useContext Hook → Fetches the context data.

// Is It a State Management Tool?
// Not a full-fledged state management tool like Redux.
// Only manages global state sharing, but doesn’t provide state update logic (like reducers).

// Drawbacks of Context API
// Re-renders all consumers when the context value changes.
// Not optimized for frequent updates (e.g., rapidly changing UI states).
// Can cause performance issues if used for large-scale state management.

// When to Use It?
// ✅ Good for:

// Theme switching, authentication, user preferences.
// State that doesn’t change frequently but needs global access.
// ❌ Not ideal for:

// High-frequency updates (e.g., animations, real-time data).
// Complex state logic (better handled by Redux, Zustand, or Recoil).


// Syntax

// const MyContext = React.createContext();

// <MyContext.Provider value={data}>
//   <ChildComponent />
// </MyContext.Provider>

// const value = useContext(MyContext);


// Analogy
// Without Context API: Passing a letter through multiple people before it reaches the receiver.
// With Context API: Directly delivering the letter to the receiver.

// Concise Summary
// Avoids prop drilling by sharing state globally.
// Not a full state management tool, just a way to pass global state.
// Causes re-renders, so not ideal for rapidly changing state.
// Best for auth, themes, user settings, and infrequent updates.


// 1️⃣ Does Context API Re-Render All Components?

// 🔹 Only components that use useContext() re-render when the context value changes.
// 🔹 Other components not using useContext() do not re-render.

// 2️⃣ Does a Re-Rendered Component Cause Its Parent to Re-Render?

// 🔹 No, if a child re-renders because of useContext(), it does NOT automatically re-render the parent.
// 🔹 React follows a "child-first" rendering approach, meaning:

// If a child updates due to useContext(), only that child (and its descendants) re-render.
// The parent only re-renders if its own state/props change.

// 3️⃣ Example to Understand Re-Renders
// import React, { createContext, useState, useContext } from "react";

// const ThemeContext = createContext();

// const Parent = () => {
//   console.log("Parent Re-rendered");

//   const [theme, setTheme] = useState("light");

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <ChildA />
//       <ChildB />
//     </ThemeContext.Provider>
//   );
// };

// const ChildA = () => {
//   console.log("ChildA Re-rendered");
//   const { theme, setTheme } = useContext(ThemeContext);

//   return (
//     <div>
//       <p>Current Theme: {theme}</p>
//       <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
//         Toggle Theme
//       </button>
//     </div>
//   );
// };

// const ChildB = () => {
//   console.log("ChildB Re-rendered");
//   return <p>I am ChildB</p>;
// };

// export default Parent;
// 4️⃣ What Happens When setTheme is Clicked?
// ChildA re-renders because it uses useContext().
// ChildB does NOT re-render because it doesn’t use useContext().
// Parent does NOT re-render, because its state hasn’t changed.
// 5️⃣ Key Takeaways
// ✔ Only components using useContext() will re-render when the context value changes.
// ✔ Parent components do NOT re-render just because their children do.
// ✔ Unrelated components that don’t use the context remain unchanged.


export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("white");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Text />
    </ThemeContext.Provider>
  );
};

export default App;

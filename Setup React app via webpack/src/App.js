// Difference Between Default Export and Named Export
import React from "react";
import Button from "./components/Button";



// a comprehensive list of conditional rendering approaches in React, including those commonly used in production-level applications:

// 1. Using if-else Statements
// A straightforward approach when rendering based on conditions.

// function App({ isLoggedIn }) {
//   if (isLoggedIn) {
//     return <h1>Welcome Back!</h1>;
//   } else {
//     return <h1>Please Log In.</h1>;
//   }
// }

// 2. Using Ternary Operator
// A concise way for simple conditions.

// function App({ isLoggedIn }) {
//   return (
//     <div>
//       {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In.</h1>}
//     </div>
//   );
// }
// 3. Using Logical && Operator
// For rendering elements only when a condition is true.

// function App({ hasAccess }) {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {hasAccess && <button>Access Admin Panel</button>}
//     </div>
//   );
// }
// 4. Using switch Statements
// Useful for multiple conditions with distinct outcomes.

// function App({ status }) {
//   switch (status) {
//     case "loading":
//       return <p>Loading...</p>;
//     case "success":
//       return <h1>Welcome!</h1>;
//     case "error":
//       return <p>Error loading data.</p>;
//     default:
//       return <p>Unknown state</p>;
//   }
// }
// 5. Inline Conditional Rendering
// Embedding logic directly inside JSX for one-off conditions.

// function App({ items }) {
//   return (
//     <div>
//       {items.length > 0 ? (
//         <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
//       ) : (
//         <p>No items found.</p>
//       )}
//     </div>
//   );
// }

// 6. Using IIFE (Immediately Invoked Function Expression)
// Good for complex conditions that don’t fit inline logic.

// function App({ user }) {
//   return (
//     <div>
//       {(() => {
//         if (user.isAdmin) return <h1>Admin Dashboard</h1>;
//         if (user.isGuest) return <h1>Guest Dashboard</h1>;
//         return <h1>General Dashboard</h1>;
//       })()}
//     </div>
//   );
// }

// 7. Conditional Rendering via Higher-Order Components (HOCs)
// Encapsulate conditions into reusable components.

// function withAdminAccess(Component) {
//   return function (props) {
//     return props.isAdmin ? <Component {...props} /> : <p>Access Denied</p>;
//   };
// }

// const AdminPanel = withAdminAccess(() => <h1>Admin Panel</h1>);

// // Usage: <AdminPanel isAdmin={true} />



// Rendering a List of Items

// Rendering a list of items is common in React applications. Here are the primary ways to achieve it:

// 1. Using map()
// The map() method is the most common way to iterate over an array and render a list.

// const items = ["Apple", "Banana", "Cherry"];

// function ItemList() {
//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   );
// }


// 2. Using forEach() (Not Recommended)
// Although you can use forEach(), it does not return a new array and requires manual handling for rendering.

// const items = ["Apple", "Banana", "Cherry"];

// function ItemList() {
//   const listItems = [];
//   items.forEach((item, index) => {
//     listItems.push(<li key={index}>{item}</li>);
//   });
//   return <ul>{listItems}</ul>;
// }


// 3. Using Conditional Rendering with Lists
// You can render lists conditionally within JSX.

// const items = ["Apple", "Banana", "Cherry"];

// function ItemList({ showItems }) {
//   return (
//     <div>
//       {showItems && (
//         <ul>
//           {items.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }


// 4. Using reduce()
// For more complex list structures, reduce() can be used.

// const items = ["Apple", "Banana", "Cherry"];

// function ItemList() {
//   return (
//     <ul>
//       {items.reduce((acc, item, index) => {
//         acc.push(<li key={index}>{item}</li>);
//         return acc;
//       }, [])}
//     </ul>
//   );
// }


// Importance of key Prop
// The key prop is essential when rendering lists in React because it helps React identify which items in the list have changed, been added, or been removed. This optimization prevents unnecessary re-renders and improves performance.

// Why key is Important?
// Efficient DOM Updates: Keys allow React to keep track of elements, enabling efficient reordering, addition, or removal of list items.
// Prevents Re-renders: Without keys, React re-renders all child components, leading to performance bottlenecks.
// Error Prevention: Using key avoids warnings and errors in the console.

// Best Practices for key Prop
// Use unique IDs if available (e.g., database IDs).
// Avoid using index as a key unless you are sure the list won’t change dynamically (e.g., no reordering or removal).
// Example:

// const items = [
//   { id: 1, name: "Apple" },
//   { id: 2, name: "Banana" },
//   { id: 3, name: "Cherry" },
// ];

// function ItemList() {
//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item.id}>{item.name}</li>
//       ))}
//     </ul>
//   );
// }


// Optimization Techniques for Rendering Lists
// 1. Use Unique Keys
// Ensure keys are unique and stable across renders. Avoid relying on indices for dynamic lists.

// 2. Virtualization
// For large lists, use libraries like React Virtualized or React Window to render only visible items.

// import { FixedSizeList as List } from "react-window";

// const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

// function VirtualizedList() {
//   return (
//     <List height={200} itemCount={items.length} itemSize={35} width={300}>
//       {({ index, style }) => (
//         <div style={style} key={index}>
//           {items[index]}
//         </div>
//       )}
//     </List>
//   );
// }


// 3. Memoization
// Use React.memo to prevent unnecessary re-renders of list items.

// const ListItem = React.memo(({ item }) => {
//   console.log("Rendering:", item);
//   return <li>{item}</li>;
// });

// function ItemList({ items }) {
//   return (
//     <ul>
//       {items.map((item) => (
//         <ListItem key={item.id} item={item.name} />
//       ))}
//     </ul>
//   );
// }


// 4. Pagination or Infinite Scroll
// Render lists in chunks to reduce DOM load.

// function PaginatedList({ items, pageSize }) {
//   const [page, setPage] = React.useState(1);
//   const paginatedItems = items.slice(0, page * pageSize);

//   return (
//     <div>
//       <ul>
//         {paginatedItems.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//       <button onClick={() => setPage((prev) => prev + 1)}>Load More</button>
//     </div>
//   );
// }


// 5. Avoid Inline Functions
// Define functions outside the component to avoid recreating them on each render.

// function ItemList({ items }) {
//   const renderItem = (item) => <li key={item.id}>{item.name}</li>;

//   return <ul>{items.map(renderItem)}</ul>;
// }


// 6. Conditional Rendering with Skeleton Loaders

// Use skeleton screens or placeholders to enhance user experience during data fetching.

// function ItemList({ isLoading, items }) {
//   return (
//     <ul>
//       {isLoading
//         ? Array(5)
//             .fill()
//             .map((_, index) => <li key={index}>Loading...</li>)
//         : items.map((item) => <li key={item.id}>{item.name}</li>)}
//     </ul>
//   );
// }

 const App = ()=>{
   
    return "my boii is out here learning some crazy stuff damn"
}

export default App;
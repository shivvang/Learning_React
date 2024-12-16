// 1. Why Two Separate Packages React and react-dom?
// React is the core library that focuses on building and describing UI components.

// It provides the tools for creating components, managing state, and handling props.
// It is platform-agnostic, meaning it doesn’t assume how or where the UI will be rendered.
// For example, the same React code can be used to render UIs on the web, mobile (via React Native), or even on other platforms.
// ReactDOM is the library responsible for rendering React components to the DOM (Document Object Model) in web applications.

// It contains methods that interact specifically with the browser DOM, such as rendering a component into an HTML element.
// This separation allows React to be versatile and reusable across different platforms, with ReactDOM handling the specifics of rendering to the web.


// 2. Functionalities of React and ReactDOM
// React (Core Library)
// Primary Focus: Component-based architecture and UI logic.
// Core Features:
// Creating Components: Using React.Component or functional components.
// State Management: Local state using hooks like useState.
// Lifecycle Methods: For class components (e.g., componentDidMount, componentDidUpdate).
// Hooks: Functional utilities like useEffect, useReducer, etc.
// Virtual DOM: Optimized updates by diffing and reconciling changes in the Virtual DOM.

// ReactDOM
// Primary Focus: Rendering React components to the browser DOM and managing interactions with the DOM.
// Core Features:
// Rendering: ReactDOM.render() or createRoot() (React 18+ for Concurrent Mode).
// Updating the DOM: Efficiently handles updates to reflect component changes in the DOM.
// Portals: Render components outside the parent DOM hierarchy (ReactDOM.createPortal).
// Event Delegation: Uses React's synthetic event system to optimize event handling on the DOM.


// 3. Application Perspective
// Benefits of Separation
// Platform Independence:
// React can power not only web apps but also mobile apps (via React Native), desktop apps (via Electron), and even VR apps.
// ReactDOM is specific to the web, ensuring each platform can have its own rendering implementation.
// Smaller Package Size:
// Applications that don’t target the web (e.g., React Native apps) don’t need to include ReactDOM, reducing their bundle size.
// Better Maintenance:
// Each package focuses on a specific area. React manages the UI logic, while ReactDOM evolves with browser APIs and optimizations.


// What is React.createElement?

// A method provided by React to create a React element.
// A React element is an object that represents a DOM node or a component in the virtual DOM.
// It is the core building block for rendering UI in React.



// Syntax

// React.createElement(type, props, ...children)

// Parameters
// type:
// The type of element to create (e.g., 'div', 'span', or a React component).

// props: (follows the camel casing which is like this -> onClick)
// An object containing attributes and properties for the element (e.g., { className: "header" }).
// Can be null if no properties are needed.

// ...children:
// The child elements or text content inside the element.
// Can be a string, React elements, or an array of these.


// Usage

// const element = React.createElement('div', { className: 'container' }, 'Hello, World!');


// This creates an object that looks like: (this basically react element)

// {
//   type: 'div',
//   props: {
//     className: 'container',
//     children: 'Hello, World!'
//   }
// }


// Application

// Typically used under the hood by JSX. When you write JSX like:
// <div className="container">Hello, World!</div>

// It gets transpiled to:

// React.createElement('div', { className: 'container' }, 'Hello, World!');

// Direct usage of React.createElement is rare in modern applications because JSX is more readable and convenient.


// What is ReactDOM.createRoot?

// A method introduced in React 18 for creating a root container to manage rendering in the DOM.
// Supports Concurrent Mode, allowing React to perform rendering more efficiently by breaking work into small units.

// Syntax
// const root = ReactDOM.createRoot(container);

// Parameters
// container:
// A DOM element where the React application will be rendered.
// Example: document.getElementById('root').

// Usage
// const root = ReactDOM.createRoot(document.getElementById('root'));

// Application
// Used to initialize React applications.
// Replaces the older ReactDOM.render() method.
// Enables new React features like Concurrent Rendering and improved performance for large applications.


// What is render?

// A method provided by the root object created using ReactDOM.createRoot.

// It renders the React element (or component) into the specified container.

// Syntax

// root.render(element);

// Parameters
// element:
// The React element or component to render.

// Usage

// const element = React.createElement('h1', {}, 'Hello, World!');
// root.render(element);

// Application
// Converts the virtual DOM structure into real DOM nodes and updates the UI.
// React efficiently updates the DOM whenever the virtual DOM changes.

//summarized version of above three
// Example Usage of All Three Methods

// const div = React.createElement('div', { className: 'container' }, 'Hello, World!');

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(div);

// This code:

// Creates a virtual DOM element (React.createElement).

// Creates a root container (ReactDOM.createRoot).

// Renders the element into the real DOM (root.render).


// What is JSX?

// JSX (JavaScript XML): A syntax extension for JavaScript that allows you to write HTML-like code directly within JavaScript.
// Used primarily in React to describe what the UI should look like.
// JSX makes it easier to visualize and write components, as it resembles HTML, but it is not HTML.

// How JSX Works

// JSX is not directly understood by browsers or JavaScript engines. It needs to be transpiled into pure JavaScript using tools like *Babel*.

// How JSX is Read by JavaScript

// Writing JSX:

// const element = <h1 className="title">Hello, World!</h1>;

// Transpiled Output:

// const element = React.createElement(
//     'h1',
//     { className: 'title' },
//     'Hello, World!'
// );
// The type is 'h1'.
// The props contain { className: 'title' }.
// The children is 'Hello, World!'.

// React then processes this React.createElement call to create a virtual DOM representation.













//creating virutal dom elements
// const div = React.createElement('div', {className:"text"}, "hello world");

//nesting virutal dom elements

// const p = React.createElement('p',{},"hello world from the p tag")

// const div = React.createElement("div", {},p)


//nesting list of elements 


 const child1= React.createElement('p',{},"hello world from the p tag")

 const child2= React.createElement('p',{},"hello world from another p tag")

 const div = React.createElement("div", {},[child1,child2])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);

//important note:-

// JSX -> React Element -> Babel converts to JavaScript (which is modern to browser understandable one)-> ReactDOM renders it -> Browser consumes it.
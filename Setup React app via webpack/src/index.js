//reference from where this is learnt is -> https://www.educative.io/answers/how-to-create-a-react-application-with-webpack



// NPM (Node Package Manager) is a tool that helps manage packages (libraries or modules) in JavaScript projects. It allows you to install, update, and manage dependencies.

// Dependency: Libraries your project needs to run, like React.

// Dev Dependency: Libraries used during development (like testing tools or bundlers) but not needed for production.

// For React, NPM helps install React itself, as well as other libraries or tools needed for building and running the app.

// package.json: A file that contains metadata(Metadata is information that describes other information, like details about a file or project.) about your project, \
// including dependencies, scripts, and configuration details.

// node_modules: A folder where NPM stores all installed packages (dependencies) for the project(locally).

// "dependencies": {
//     "react": "^19.0.0",
//     "react-dom": "~19.0.0"
//   }


// ^ (Caret): Allows updates to minor and patch versions, but not major versions. For example, ^19.0.0 would accept any version from 19.0.0 to less than 20.0.0.

// ~ (Tilde): Allows updates only to the patch version. For example, ~19.0.0 would accept versions from 19.0.0 to less than 19.1.0.(basically will update to latest version and this is not recommended)





//what is a webpack ?

// Webpack: A module bundler for JavaScript applications. It bundles files, including JavaScript, CSS, and images, into optimized output.

// What it does: It takes multiple files, processes them (transpiles, minifies, etc.), and outputs a smaller, optimized bundle for the browser.

// Features:

// Code Minification: The process of removing unnecessary characters (like spaces and comments) from code to reduce its size and improve loading time without changing functionality.

// Hot Module Reload (HMR): A feature that allows you to update code in the browser without reloading the entire page, preserving the app’s state during development.

// Code splitting: Divides code into smaller chunks for faster loading.
// Loaders: Transforms files (like turning SCSS into CSS).
// Plugins: Extends functionality (like minifying code).
// Performance optimization:

// Minimizes file sizes (via compression).
// Lazy loading: Only loads necessary code on demand.
// Caching: Reuses unchanged files to avoid unnecessary loading.


// Webpack-based:

// Development: webpack-dev-server, webpack-serve.
// Production: webpack, webpack-cli.

// Alternatives to Webpack include Parcel, Vite, Rollup, Browserify, Snowpack, and esbuild.


//what is babel and what does it do ?
// Babel: A JavaScript compiler that converts modern JavaScript (ES6+) into backward-compatible versions for older browsers.

// What it does: It transforms new JavaScript syntax and features into code that can run in older environments.

// Transpiling: Short for "transforming + compiling", it refers to converting code from one version to another (e.g., ES6 to ES5).

// React Transpiling: React code (JSX) is transpiled by Babel into regular JavaScript code that creates DOM elements using React.createElement.


import React from "react";
import ReactDOM from "react-dom/client"

const component = React.createElement("div", null, "shivang is the almighty lord");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(component);
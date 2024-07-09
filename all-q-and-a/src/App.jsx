import React, { useState } from 'react';
import './App.css'; 

// const jsQuestions = [
//   { question: "Why do we use JavaScript and its advantages?", answer: "JavaScript is used for web development to create interactive and dynamic content. Advantages: Versatile (runs on client and server-side), Easy to learn and implement, Large community and ecosystem, Supports event-driven, functional, and imperative programming styles." },
//   { question: "Difference between == and ===?", answer: "== checks for equality with type coercion. === checks for equality without type coercion (strict equality)." },
//   { question: "Difference between null and undefined?", answer: "null: Explicitly assigned value indicating no value. undefined: Variable declared but not assigned a value." },
//   { question: "What is NaN in JavaScript?", answer: "NaN stands for 'Not-a-Number'. It is a value representing something that is not a valid number." },
//   { question: "Difference between var, let, and const?", answer: "var: Function-scoped, can be redeclared and updated. let: Block-scoped, can be updated but not redeclared. const: Block-scoped, cannot be updated or redeclared." },
//   { question: "What is Hoisting in JavaScript?", answer: "Hoisting is the default behavior of moving declarations to the top of the scope before code execution." },
//   { question: "What is the Lexical Environment?", answer: "A lexical environment is where a variable or function is declared. It determines the accessibility of variables based on their location within the code." },
//   { question: "What is the Temporal Dead Zone?", answer: "The period between entering the scope and the variable being declared where the variable cannot be accessed." },
//   { question: "Different types of loops? var and let in for loop?", answer: "Types: for, while, do...while, for...in, for...of. var in a loop is function-scoped; let is block-scoped." },
//   { question: "What is this Keyword in JavaScript? Why do we use it?", answer: "this refers to the object from which it was called. Used for context reference within objects and classes." },
//   { question: "What is an API? How to fetch data from an API?", answer: "API (Application Programming Interface) allows different software entities to communicate. Fetch data using fetch() method or libraries like Axios." },
//   { question: "Difference between setTimeout and setInterval? Is it synchronous or asynchronous? Is it a part of JavaScript?", answer: "setTimeout: Executes a function after a delay. setInterval: Repeatedly executes a function at intervals. Both are asynchronous and part of the browser's Web API." },
//   { question: "What are Event loops? Explain the whole flow", answer: "Event loop manages the execution of asynchronous code, ensuring non-blocking behavior by handling callbacks from the event queue." },
//   { question: "What is Call Stack?", answer: "The call stack is a data structure that records function calls in the order they need to be executed." },
//   { question: "What is a micro task queue? Difference between Micro and macro stack?", answer: "Microtasks are tasks that are executed after the currently executing script and before the event loop continues. Macrotasks include I/O operations, setTimeout, etc." },
//   { question: "What is Callback hell? Inversion of control? Pyramid of Doom?", answer: "Callback hell is the complex, nested structure of callbacks. Inversion of control refers to the relinquishment of control flow from your program to the library/framework. Pyramid of Doom is the anti-pattern of nested callbacks." },
//   { question: "How to avoid callback hell?", answer: "Using Promises, async/await, modular functions, and control flow libraries." },
//   { question: "What are Promises? Drawbacks of Promises? Methods of promises? State of Promises?", answer: "Promises represent eventual completion of asynchronous operations. Drawbacks: Complex chaining, lack of cancellation. Methods: then(), catch(), finally(). States: Pending, Fulfilled, Rejected." },
//   { question: "What is Async/Await? Is it synchronous or asynchronous?", answer: "Syntax for handling promises, making asynchronous code look synchronous." },
//   { question: "Can async/await and .then/.catch be used together?", answer: "Yes, they can be mixed in code." },
//   { question: "Difference between Rest operator and Spread Operator?", answer: "Rest (...args): Collects arguments into an array. Spread (...arr): Spreads elements from an array." },
//   { question: "Difference between Call, Apply, and Bind?", answer: "call(): Calls a function with given this and arguments. apply(): Calls a function with given this and an array of arguments. bind(): Creates a new function with a specified this value and arguments." },
//   { question: "What is Closure? Lexical Scope? What is Currying?", answer: "Closure: Function that retains access to its lexical scope. Lexical Scope: Scope determined by code structure. Currying: Transforming a function with multiple arguments into a sequence of functions with single arguments." },
//   { question: "What is Class and Object? What are Prototypes?", answer: "Class: Blueprint for creating objects. Object: Instance of a class. Prototypes: Objects from which other objects inherit properties." },
//   { question: "Difference between sessionStorage and localStorage?", answer: "sessionStorage: Data persists for the session. localStorage: Data persists until explicitly deleted." },
//   { question: "Difference between map and forEach?", answer: "map: Returns a new array with the results. forEach: Executes a function for each element." },
//   { question: "How to Handle Error in JavaScript?", answer: "Using try...catch, throw, and error handling in promises." },
//   { question: ".then and .catch and Try? Is .then synchronous or asynchronous?", answer: "then: Asynchronous, used in promise chaining. catch: Handles errors in promises. try: Synchronous error handling." },
//   { question: "Difference between promise.all and promise.allSettled?", answer: "promise.all: Resolves when all promises resolve. promise.allSettled: Resolves when all promises settle, regardless of the result." },
//   { question: "Reconciliation in React", answer: "React's process of updating the DOM with minimal operations by comparing new and old trees." },
// ];


const jsQuestions = [
  { 
    question: "Why do we use JavaScript and its advantages?", 
    answer: "JavaScript is essential for web development, enabling dynamic and interactive content on websites. Its advantages include versatility (usable on both client and server sides), ease of learning and implementation, a vast community and ecosystem, and support for multiple programming paradigms (event-driven, functional, and imperative)." 
  },
  { 
    question: "Difference between == and ===?", 
    answer: "== checks for equality with type coercion, meaning it converts different types to the same type before comparison. === checks for strict equality without type coercion, so the values and their types must both be the same." 
  },
  { 
    question: "Difference between null and undefined?", 
    answer: "null is an explicitly assigned value indicating the absence of any object value. undefined means a variable has been declared but has not yet been assigned a value." 
  },
  { 
    question: "What is NaN in JavaScript?", 
    answer: "NaN stands for 'Not-a-Number'. It represents a value that is not a valid number, often resulting from invalid or undefined mathematical operations." 
  },
  { 
    question: "Difference between var, let, and const?", 
    answer: "var is function-scoped and can be redeclared and updated. let is block-scoped, can be updated but not redeclared within the same scope. const is also block-scoped and cannot be updated or redeclared, ensuring that the variable holds a constant value." 
  },
  { 
    question: "What is Hoisting in JavaScript?", 
    answer: "Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their containing scope during the compile phase, allowing variables and functions to be used before they are declared." 
  },
  { 
    question: "What is the Lexical Environment?", 
    answer: "A lexical environment is a structure that holds identifier-variable mapping (i.e., where variables and functions are stored) and is created whenever a function is invoked. It determines the accessibility of variables based on their location within the code." 
  },
  { 
    question: "What is the Temporal Dead Zone?", 
    answer: "The Temporal Dead Zone (TDZ) is the period between entering a block and the point at which a variable declared with let or const is initialized, during which accessing the variable will result in a ReferenceError." 
  },
  { 
    question: "Different types of loops? var and let in for loop?", 
    answer: "Common loops in JavaScript include for, while, do...while, for...in, and for...of. In a loop, var is function-scoped, meaning it is available outside the loop after execution. let is block-scoped, meaning it is confined to the loop block and not accessible outside it." 
  },
  { 
    question: "What is this Keyword in JavaScript? Why do we use it?", 
    answer: "The this keyword refers to the object from which the function was called. It provides a way to reference the object context within methods and constructors, enabling more dynamic and context-aware code." 
  },
  { 
    question: "What is an API? How to fetch data from an API?", 
    answer: "An API (Application Programming Interface) allows different software entities to communicate with each other. Data can be fetched from an API using the fetch() method or libraries like Axios to make HTTP requests and handle responses." 
  },
  { 
    question: "Difference between setTimeout and setInterval? Is it synchronous or asynchronous? Is it a part of JavaScript?", 
    answer: "setTimeout executes a function after a specified delay. setInterval repeatedly executes a function at specified intervals. Both are asynchronous and are part of the browser's Web API, not the core JavaScript language." 
  },
  { 
    question: "What are Event loops? Explain the whole flow", 
    answer: "The event loop manages the execution of asynchronous code in JavaScript, ensuring non-blocking behavior. It handles callbacks by dequeuing them from the event queue and pushing them onto the call stack when the stack is empty, allowing continuous execution of asynchronous operations." 
  },
  { 
    question: "What is Call Stack?", 
    answer: "The call stack is a data structure that records function invocations. It operates on a LIFO (Last In, First Out) principle, keeping track of functions called and their order, facilitating the execution and return flow of functions." 
  },
  { 
    question: "What is a micro task queue? Difference between Micro and macro stack?", 
    answer: "Microtasks are tasks executed immediately after the currently executing script, before rendering updates. Examples include promise callbacks. Macrotasks (or tasks) include I/O operations and setTimeout. The main difference is that microtasks have higher priority and are executed before macrotasks in the event loop." 
  },
  { 
    question: "What is Callback hell? Inversion of control? Pyramid of Doom?", 
    answer: "Callback hell refers to the complex, nested structure of multiple callbacks. Inversion of control occurs when you pass control flow from your program to a library/framework. Pyramid of Doom is an anti-pattern resulting from deeply nested callbacks, making code hard to read and maintain." 
  },
  { 
    question: "How to avoid callback hell?", 
    answer: "To avoid callback hell, use Promises, async/await syntax, modularize functions, and leverage control flow libraries like async.js to manage asynchronous code more cleanly and maintainably." 
  },
  { 
    question: "What are Promises? Drawbacks of Promises? Methods of promises? State of Promises?", 
    answer: "Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value. Drawbacks include complex chaining and lack of built-in cancellation. Methods include then(), catch(), and finally(). Promise states are pending, fulfilled, and rejected." 
  },
  { 
    question: "What is Async/Await? Is it synchronous or asynchronous?", 
    answer: "Async/await is a syntax for handling Promises, making asynchronous code appear synchronous. Functions declared with async return Promises, and await pauses execution until the Promise resolves." 
  },
  { 
    question: "Can async/await and .then/.catch be used together?", 
    answer: "Yes, async/await and .then/.catch can be used together in code to handle Promises, providing flexibility in managing asynchronous operations and error handling." 
  },
  { 
    question: "Difference between Rest operator and Spread Operator?", 
    answer: "The Rest operator (...args) collects all remaining arguments into an array. The Spread operator (...arr) spreads elements from an array or object into individual elements or properties." 
  },
  { 
    question: "Difference between Call, Apply, and Bind?", 
    answer: "call() invokes a function with a specified this context and arguments. apply() is similar but takes an array of arguments. bind() creates a new function with a specified this context and arguments, allowing it to be called later." 
  },
  { 
    question: "What is Closure? Lexical Scope? What is Currying?", 
    answer: "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. Lexical scope is determined by the position of functions and blocks in the code. Currying transforms a function with multiple arguments into a sequence of functions, each taking a single argument." 
  },
  { 
    question: "What is Class and Object? What are Prototypes?", 
    answer: "A class is a blueprint for creating objects, defining properties and behaviors. An object is an instance of a class. Prototypes are objects from which other objects inherit properties and methods, enabling shared behavior and memory efficiency." 
  },
  { 
    question: "Difference between sessionStorage and localStorage?", 
    answer: "sessionStorage stores data for the duration of the page session and is cleared when the page is closed. localStorage persists data until it is explicitly deleted, even after the browser is closed and reopened." 
  },
  { 
    question: "Difference between map and forEach?", 
    answer: "map() creates a new array with the results of calling a provided function on every element. forEach() executes a provided function once for each array element but does not return a new array." 
  },
  { 
    question: "How to Handle Error in JavaScript?", 
    answer: "Errors in JavaScript can be handled using try...catch blocks, throw statements for custom errors, and error handling in Promises using .catch()." 
  },
  { 
    question: ".then and .catch and Try? Is .then synchronous or asynchronous?", 
    answer: ".then() and .catch() are asynchronous methods for handling fulfilled and rejected Promises, respectively. try is used for synchronous error handling in try...catch blocks." 
  },
  { 
    question: "Difference between promise.all and promise.allSettled?", 
    answer: "promise.all() resolves when all Promises in the iterable resolve, or rejects if any Promise rejects. promise.allSettled() resolves when all Promises settle (either resolve or reject), providing an array of results." 
  },
  { 
    question: "Reconciliation in React", 
    answer: "Reconciliation is React's process of updating the DOM by comparing the new virtual DOM with the old one and making the minimum number of changes to keep the DOM in sync with the virtual DOM." 
  }
];


// const reactQuestions = [
//   { question: "Difference between Virtual DOM and Real DOM? What is Diffing Algorithm? What is the Batch update in ReactJS?", answer: "Virtual DOM: Lightweight copy of the real DOM. Real DOM: Actual DOM rendered in the browser. Diffing Algorithm: Determines the minimum number of changes required. Batch update: React groups multiple updates into a single re-render." },
//   { question: "Destructuring of an array", answer: "Extracting values from arrays/objects and assigning them to variables." },
//   { question: "Functional component and class components differences?", answer: "Functional: Stateless, hooks for state and lifecycle. Class: Stateful, lifecycle methods." },
//   { question: "What is the class Component life cycle?", answer: "Mounting, Updating, Unmounting phases." },
//   { question: "What is Rendering?", answer: "Process of displaying UI based on component state and props." },
//   { question: "What are Hooks? Especially useState, useEffect, useReducer?", answer: "Functions that let you use state and other React features. useState: State management. useEffect: Side effects handling. useReducer: Complex state logic." },
//   { question: "Why can't we directly update the state in useState?", answer: "State updates should go through the updater function to ensure React's reactivity." },
//   { question: "What is Conditional Rendering?", answer: "Rendering components based on conditions." },
//   { question: "How useEffect works with empty dependency, no dependency, and state inside the dependency?", answer: "Empty: Runs once after initial render. No: Runs after every render. State: Runs when the state changes." },
//   { question: "Difference between Controlled and Uncontrolled Component", answer: "Controlled: State managed by React. Uncontrolled: State managed by DOM." },
//   { question: "What is useRef?", answer: "Reference to DOM elements or mutable values." },
//   { question: "useEffect hook with dependency array? How to store data in local storage using useEffect?", answer: "Dependency array controls when the effect runs. Store data: useEffect(() => { localStorage.setItem(key, value); }, [value]);" },
//   { question: "Lifecycle methods vs React hooks", answer: "Hooks provide a way to use lifecycle methods in functional components." },
//   { question: "Why use useEffect to fetch an API? Problems without useEffect?", answer: "Ensures API calls happen at the right time. Without it, unnecessary re-renders or missed updates might occur." },
//   { question: "Difference between useMemo and useCallback?", answer: "useMemo: Memoizes a value. useCallback: Memoizes a function." },
//   { question: "How to use memo and useCallback for performance optimization?", answer: "memo: Prevents unnecessary re-renders of functional components by memoizing the rendered output. useCallback: Prevents unnecessary function re-creations by memoizing callback functions." },
//   { question: "What is the useDispatch hook?", answer: "Used in Redux to dispatch actions." },
//   { question: "How to pass data from child to parent component?", answer: "Pass a function from the parent to the child and call that function in the child with the data as an argument." },
//   { question: "How to share data between sibling components?", answer: "Use a common parent component to hold the shared state and pass the state and update functions down as props, or use a state management library like Redux or Context API." },
//   { question: "What is the useContext hook? Why use it?", answer: "Provides a way to pass data through the component tree without passing props down manually at every level." },
//   { question: "What is prop drilling?", answer: "Passing data through multiple nested components." },
//   { question: "What is Context API?", answer: "A React structure that enables sharing specific forms of data across all levels of the application." },
//   { question: "Why use Context API instead of prop drilling?", answer: "Simplifies data passing by avoiding multiple layers of passing props." },
//   { question: "What is Redux? Flow of Redux? What is Redux Thunk and Redux Saga? What is a reducer?", answer: "Redux: State management library. Flow: Actions → Reducers → Store → UI. Redux Thunk: Middleware for async logic. Redux Saga: Middleware for handling side effects. Reducer: Function that determines state changes in response to actions." },
//   { question: "Difference between Context vs Redux?", answer: "Context: Simpler for less complex state sharing. Redux: More powerful, suited for larger applications with complex state logic." },
//   { question: "What is Router? Why use BrowserRouter? Create a navigation bar and define its path?", answer: "Router: Enables navigation between different components/views in a React application. BrowserRouter: Uses HTML5 history API for cleaner URLs." },
//   { question: "Types of components? What are higher-order components?", answer: "Types: Functional, Class, Pure, and Higher-Order. Higher-Order Components (HOC): Functions that take a component and return a new component." },
//   { question: "What are Custom components in ReactJS and why use them?", answer: "Custom components are user-defined reusable components. Used for code reuse and better code organization." },
//   { question: "What is Importing and Exporting?", answer: "Importing: Bringing modules or components into a file. Exporting: Making functions, objects, or primitives available for import in other files." },
//   { question: "What is Suspense, Callback, useMemo, Re-forward?", answer: "Suspense: A React component for lazy-loading. Callback: A function passed as an argument to another function. useMemo: Memoizes a computed value. Re-forward: Likely a typo, should be 'ref forwarding', which is a technique for passing refs to child components." },
//   { question: "Why use keys in React list items?", answer: "Keys help React identify which items have changed, are added, or removed for efficient re-rendering." },
//   { question: "What is createSlice in Redux Toolkit?", answer: "A function that simplifies creating Redux slices (reducers + actions)." },
//   { question: "How to create a store in Redux?", answer: "import { createStore } from 'redux'; import rootReducer from './reducers'; const store = createStore(rootReducer);" },
//   { question: "Flux architecture", answer: "An application architecture for building client-side web applications, emphasizing unidirectional data flow." },
//   { question: "What is phase and methods in React?", answer: "Phases: Mounting, Updating, Unmounting. Methods: Lifecycle methods like `componentDidMount`, `componentDidUpdate`, etc." },
//   { question: "Can we replace Redux using React hooks?", answer: "For simple state management, React hooks (like `useState` and `useReducer`) can replace Redux." }
// ];


const reactQuestions = [
  { 
    question: "Difference between Virtual DOM and Real DOM? What is Diffing Algorithm? What is Batch update in ReactJS?", 
    answer: "Virtual DOM: A lightweight representation of the actual DOM kept in memory. Real DOM: The physical HTML structure rendered by the browser. Diffing Algorithm: React's mechanism to reconcile changes between the Virtual DOM and the Real DOM efficiently. Batch update: React combines multiple state updates into a single re-render for performance optimization." 
  },
  { 
    question: "Destructuring of an array", 
    answer: "Destructuring allows extracting values from arrays or objects into distinct variables, making code concise and readable." 
  },
  { 
    question: "Functional component and class components differences?", 
    answer: "Functional components are stateless and utilize hooks like useState for managing state and useEffect for handling side effects. Class components are stateful and employ lifecycle methods such as componentDidMount for initialization." 
  },
  { 
    question: "What is the class Component lifecycle?", 
    answer: "The class component lifecycle includes Mounting (componentDidMount), Updating (componentDidUpdate), and Unmounting (componentWillUnmount) phases, managing component initialization, updates, and cleanup." 
  },
  { 
    question: "What is Rendering?", 
    answer: "Rendering refers to the process of generating a UI component based on its current state and props, resulting in updates to the DOM." 
  },
  { 
    question: "What are Hooks? Especially useState, useEffect, useReducer?", 
    answer: "Hooks are functions that enable functional components to manage state and lifecycle operations. useState manages component state, useEffect handles side effects like data fetching, and useReducer facilitates complex state management." 
  },
  { 
    question: "Why can't we directly update the state in useState?", 
    answer: "State updates in useState must use its updater function to ensure React's reactivity and trigger re-renders correctly." 
  },
  { 
    question: "What is Conditional Rendering?", 
    answer: "Conditional rendering involves displaying components or elements based on specific conditions, enabling dynamic updates to the user interface." 
  },
  { 
    question: "How useEffect works with empty dependency, no dependency, and state inside the dependency?", 
    answer: "useEffect with an empty dependency array runs once after the initial render. With no dependency array, it runs after every render. When dependent on state, it runs whenever the specified state changes." 
  },
  { 
    question: "Difference between Controlled and Uncontrolled Component", 
    answer: "Controlled components have their state managed by React, while uncontrolled components manage state internally using the DOM. Controlled components maintain synchronization with React state, facilitating consistent UI behavior." 
  },
  { 
    question: "What is useRef?", 
    answer: "useRef provides a reference to a DOM element or a mutable value across renders, useful for accessing or modifying the DOM directly." 
  },
  { 
    question: "useEffect hook with dependency array? How to store data in local storage using useEffect?", 
    answer: "The dependency array in useEffect controls when the effect runs. To store data in local storage with useEffect, use: useEffect(() => { localStorage.setItem(key, value); }, [value]);" 
  },
  { 
    question: "Lifecycle methods vs React hooks", 
    answer: "Hooks like useEffect and useState provide a way to manage component lifecycle and state in functional components, replacing class component lifecycle methods." 
  },
  { 
    question: "Why use useEffect to fetch an API? Problems without useEffect?", 
    answer: "useEffect ensures API calls occur at appropriate times in the component lifecycle, preventing unnecessary re-renders or missed updates. Without useEffect, API calls might interfere with rendering, leading to inconsistent UI states." 
  },
  { 
    question: "Difference between useMemo and useCallback?", 
    answer: "useMemo memoizes a computed value to optimize performance by avoiding unnecessary recalculations. useCallback memoizes a callback function to prevent unnecessary re-renders of child components." 
  },
  { 
    question: "How to use memo and useCallback for performance optimization?", 
    answer: "memo optimizes functional component renders by memoizing the rendered output based on prop changes. useCallback memoizes callback functions to prevent unnecessary re-creations, improving performance in event handlers and prop dependencies." 
  },
  { 
    question: "What is the useDispatch hook?", 
    answer: "useDispatch is a hook in Redux used to dispatch actions to the Redux store from functional components." 
  },
  { 
    question: "How to pass data from child to parent component?", 
    answer: "Data can be passed from child to parent components in React by defining callback functions in the parent and invoking them with data from the child." 
  },
  { 
    question: "How to share data between sibling components?", 
    answer: "Data sharing between sibling components can be achieved by lifting state up to a common parent component or using state management libraries like Redux or Context API to manage shared state." 
  },
  { 
    question: "What is the useContext hook? Why use it?", 
    answer: "useContext provides a way to access data from React's Context API without manually passing props through every level of the component tree. It simplifies data propagation and improves code maintainability." 
  },
  { 
    question: "What is prop drilling?", 
    answer: "Prop drilling refers to the process of passing data through multiple layers of nested components in React by explicitly passing props down the component tree, which can lead to code verbosity and maintenance issues." 
  },
  { 
    question: "What is Context API?", 
    answer: "Context API in React provides a way to share specific types of data across all levels of the component tree without manually passing props down through each level. It simplifies state management and improves component reusability." 
  },
  { 
    question: "Why use Context API instead of prop drilling?", 
    answer: "Context API simplifies data sharing by eliminating the need to pass props through intermediate components, reducing code complexity and making the application more scalable and maintainable." 
  },
  { 
    question: "What is Redux? Flow of Redux? What is Redux Thunk and Redux Saga? What is a reducer?", 
    answer: "Redux is a state management library for JavaScript applications, providing a predictable state container. Redux flow involves actions dispatched to reducers, which update the state held in the store, triggering UI updates. Redux Thunk and Redux Saga are middleware for handling asynchronous logic in Redux. A reducer is a function that specifies how the application's state changes in response to actions sent to the store." 
  },
  { 
    question: "Difference between Context vs Redux?", 
    answer: "Context API in React is simpler and suitable for managing less complex state across components. Redux is more powerful and appropriate for managing larger, more complex state and state interactions in applications." 
  },
  { 
    question: "What is Router? Why use BrowserRouter? Create a navigation bar and define its path?", 
    answer: "Router in React enables navigation between different components or views in a single-page application. BrowserRouter uses the HTML5 history API to provide cleaner URLs without hash fragments. A navigation bar can be created using React Router's Link component to define paths for navigating between different views." 
  },
  { 
    question: "Types of components? What are higher-order components?", 
    answer: "Types of components in React include Functional components, Class components, Pure components, and Higher-Order Components (HOCs). HOCs are functions that accept a component and return a new enhanced component, enabling code reuse and enhancing component functionality." 
  },
  { 
    question: "What are Custom components in ReactJS and why use them?", 
    answer: "Custom components in React are user-defined components tailored for specific application needs, promoting code reuse, enhancing component organization, and improving overall application maintainability." 
  },
  { 
    question: "What is Importing and Exporting?", 
    answer: "Importing and Exporting in JavaScript modules enable encapsulating code into separate files for better organization and reuse. Importing brings modules or components into a file, while Exporting makes functions, objects, or primitives available for import in other files." 
  },
  { 
    question: "What is Suspense, Callback, useMemo, Re-forward?", 
    answer: "Suspense is a React component for handling loading states, enabling better support for code-splitting and lazy-loading. Callback is a function passed as an argument to another function. useMemo memoizes a computed value to optimize performance. 'Re-forward' seems to be a typo; it might refer to 'ref forwarding', a technique for passing refs to child components to access or modify their DOM nodes." 
  },
  { 
    question: "Why use keys in React list items?", 
    answer: "Keys in React list items help identify which items have changed, been added, or removed, optimizing re-rendering performance and ensuring correct UI updates." 
  },
  { 
    question: "What is createSlice in Redux Toolkit?", 
    answer: "createSlice in Redux Toolkit simplifies the process of creating Redux slice reducers by combining reducer functions and action creators into a single slice of state management logic." 
  },
  { 
    question: "How to create a store in Redux?", 
    answer: "To create a Redux store, import createStore from 'redux', combine your reducers with combineReducers, and initialize the store with createStore, passing in your combined reducers." 
  },
  { 
    question: "Flow of state in Redux?", 
    answer: "In Redux, the flow of state starts with dispatching an action, which is handled by a reducer that updates the state. The new state is then propagated to the store, triggering UI updates through the React-Redux binding." 
  },
  { 
    question: "What is useState?", 
    answer: "useState is a React hook that allows you to add state to functional components. It returns a state variable and a function to update it." 
  },
  { 
    question: "What is the useEffect hook?", 
    answer: "useEffect is a React hook that runs side effects in functional components, such as data fetching or updating the DOM. It can be controlled with dependency arrays to run at specific times." 
  },
  { 
    question: "What are pure components?", 
    answer: "Pure components in React are components that only re-render when their props or state change, optimizing performance by preventing unnecessary renders." 
  },
  { 
    question: "What is componentDidMount?", 
    answer: "componentDidMount is a lifecycle method in class components that runs after the component is first rendered, often used for data fetching or initializing third-party libraries." 
  },
  { 
    question: "What is componentDidUpdate?", 
    answer: "componentDidUpdate is a lifecycle method in class components that runs after the component updates, useful for reacting to prop or state changes." 
  },
  { 
    question: "What is componentWillUnmount?", 
    answer: "componentWillUnmount is a lifecycle method in class components that runs just before the component is removed from the DOM, used for cleanup tasks like removing event listeners or canceling network requests." 
  },
  { 
    question: "What is React Router?", 
    answer: "React Router is a library for managing navigation in React applications, enabling the creation of dynamic, client-side routing with nested routes and route parameters." 
  },
  { 
    question: "What is the useHistory hook?", 
    answer: "useHistory is a React Router hook that provides access to the history object, allowing you to navigate programmatically within your application." 
  },
  { 
    question: "What is the useParams hook?", 
    answer: "useParams is a React Router hook that extracts route parameters from the URL, enabling dynamic routing and access to specific route information within components." 
  },
  { 
    question: "What is the useLocation hook?", 
    answer: "useLocation is a React Router hook that returns the current location object, providing information about the URL, including the pathname, search parameters, and hash." 
  },
  { 
    question: "How to handle forms in React?", 
    answer: "Handling forms in React involves managing form state using useState for controlled components, handling form submissions with event handlers, and validating input data as needed." 
  },
  { 
    question: "What is propTypes in React?", 
    answer: "propTypes is a type-checking feature in React that ensures components receive props of the correct type, improving code quality and catching potential errors during development." 
  },
  { 
    question: "What is defaultProps in React?", 
    answer: "defaultProps is a React feature that allows you to define default values for props, ensuring components have default behavior even when some props are not provided." 
  },
  { 
    question: "What is a key prop in React?", 
    answer: "A key prop in React is a unique identifier for list items, used to optimize rendering performance by helping React identify which items have changed, been added, or removed." 
  },
  { 
    question: "What is Prop Drilling in React?", 
    answer: "Prop Drilling in React refers to passing data through multiple levels of components by explicitly passing props at each level, which can lead to deeply nested components and harder-to-maintain code." 
  },
  { 
    question: "What is Context API?", 
    answer: "Context API is a React feature that provides a way to share values between components without having to explicitly pass props through every level of the component tree, simplifying state management for global data." 
  },
  { 
    question: "What is useReducer?", 
    answer: "useReducer is a React hook that manages complex state logic by using a reducer function, similar to Redux reducers, enabling more predictable state transitions." 
  },
  { 
    question: "What is useCallback?", 
    answer: "useCallback is a React hook that returns a memoized version of a callback function, preventing unnecessary re-creations and improving performance by avoiding unneeded renders of child components." 
  },
  { 
    question: "What is useMemo?", 
    answer: "useMemo is a React hook that memoizes a computed value, optimizing performance by recalculating the value only when its dependencies change." 
  },
  { 
    question: "What is the difference between useEffect and useLayoutEffect?", 
    answer: "useEffect runs side effects after the render is committed to the screen, while useLayoutEffect runs synchronously after all DOM mutations, useful for measuring DOM changes and applying them before the browser paints." 
  },
  { 
    question: "What is useImperativeHandle?", 
    answer: "useImperativeHandle is a React hook that customizes the instance value exposed to parent components when using ref, enabling control over what values are accessible." 
  },
  { 
    question: "What is the use of StrictMode in React?", 
    answer: "StrictMode is a React component that helps identify potential issues in an application by activating additional checks and warnings for its descendants, promoting best practices." 
  },
  { 
    question: "What is an Error Boundary?", 
    answer: "An Error Boundary is a React component that catches JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI instead of crashing the entire component tree." 
  },
  { 
    question: "What is lazy loading in React?", 
    answer: "Lazy loading in React is a technique for loading components or resources on demand rather than at the initial page load, improving performance and reducing initial load times. React.lazy and Suspense are used to implement lazy loading." 
  },
  { 
    question: "How to handle errors in React?", 
    answer: "Errors in React can be handled using try-catch blocks in event handlers, Error Boundaries for catching errors in component trees, and using tools like Sentry for tracking and reporting runtime errors." 
  },
  { 
    question: "What is useTransition?", 
    answer: "useTransition is a React hook for managing asynchronous updates, allowing certain updates to be marked as non-urgent and deferring them until more urgent updates are processed, improving UI responsiveness." 
  },
  { 
    question: "What is useDeferredValue?", 
    answer: "useDeferredValue is a React hook that defers the re-rendering of a value until more urgent updates are processed, useful for optimizing performance in complex components by delaying non-critical updates." 
  }
];


function App() {
  const [selectedJSQuestion, setSelectedJSQuestion] = useState(null);
  const [selectedReactQuestion, setSelectedReactQuestion] = useState(null);

  return (
    <div className="app-container">
      <h1>JavaScript and React Questions</h1>
      <div className="section">
        <h2>JavaScript Questions</h2>
        <ul>
          {jsQuestions.map((q, index) => (
            <li key={index} className="question-item">
              <div onClick={() => setSelectedJSQuestion(selectedJSQuestion === index ? null : index)}>
                {q.question}
              </div>
              {selectedJSQuestion === index && <p className="answer">{q.answer}</p>}
            </li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h2>React Questions</h2>
        <ul>
          {reactQuestions.map((q, index) => (
            <li key={index} className="question-item">
              <div onClick={() => setSelectedReactQuestion(selectedReactQuestion === index ? null : index)}>
                {q.question}
              </div>
              {selectedReactQuestion === index && <p className="answer">{q.answer}</p>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

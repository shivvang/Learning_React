
import React from "react";
import {useSelector,useDispatch} from "react-redux"
import { increment ,decrement, incrementByAmount} from "./slice/counterSlice";


// Redux Toolkit Notes

// 1️⃣ Configure the Redux Store with configureStore

// configureStore simplifies store setup with good defaults.

// Accepts a reducer function as a named argument.

// Automatically sets up Redux DevTools and middleware like thunk.

// Example:

// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';

// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

// export default store;

// 2️⃣ Provide the Redux Store to React Components

// Use <Provider> from react-redux to wrap the app.

// Pass the store as a prop to <Provider>.

// Example:

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';
// import App from './App';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

// 3️⃣ Create a Redux "Slice" Reducer with createSlice

// createSlice generates action creators and reducers in one step.

// Accepts:

// A name (used in action types).

// An initial state.

// Reducers that update state (can use mutation syntax via Immer).

// Example:

// import { createSlice } from '@reduxjs/toolkit';

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: { value: 0 },
//   reducers: {
//     increment: (state) => {
//       state.value += 1; // Uses Immer, so mutation is fine
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },
// });

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// export default counterSlice.reducer;

// 4️⃣ Read Data from Store with useSelector

// useSelector allows components to access Redux store state.

// Example:

// import { useSelector } from 'react-redux';

// const CounterValue = () => {
//   const count = useSelector((state) => state.counter.value);
//   return <div>Count: {count}</div>;
// };

// 5️⃣ Dispatch Actions with useDispatch

// useDispatch returns the store's dispatch function.

// Used to send actions to the Redux store.

// Example:

// import { useDispatch } from 'react-redux';
// import { increment, decrement } from './counterSlice';

// const CounterButtons = () => {
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <button onClick={() => dispatch(increment())}>+</button>
//       <button onClick={() => dispatch(decrement())}>-</button>
//     </div>
//   );
// };

// 6️⃣ How createSlice and createReducer Use Immer

// Immer allows writing "mutating" logic that is converted into immutable updates.

// Redux Toolkit handles state immutability automatically.

// Example:

// import { createReducer } from '@reduxjs/toolkit';
// import { increment, decrement } from './counterSlice';

// const counterReducer = createReducer({ value: 0 }, {
//   [increment]: (state) => { state.value += 1; },
//   [decrement]: (state) => { state.value -= 1; },
// });

// 7️⃣ Summary

// ✅ configureStore sets up the Redux store with sensible defaults.
// ✅ <Provider> makes the Redux store available to components.
// ✅ createSlice simplifies creating reducers and actions.
// ✅ useSelector reads values from the Redux store.
// ✅ useDispatch sends actions to update the store.
// ✅ Immer allows state updates using mutation-like syntax.

const App = () => {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch();
  return (
    <>
    {count}
    <button onClick={()=>dispatch(increment())} >increment counter by one</button>
    <button onClick={()=>dispatch(decrement())} >decrement counter by one</button>
    <button onClick={()=>dispatch(incrementByAmount(10))}>increment by certain amount</button>
    </>
  )
}

export default App;

import React, { useReducer } from "react";
import { ComponentA } from "./components/ComponentA";
import "./App.css";
import { ComponentB } from "./components/ComponentB";

type State = {
  firstCounter: number;
  secondCounter: number;
};

type Action = {
  type: string;
  value: number;
};
const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const CountContext = React.createContext({
  countState: initialState,
  countDispatch: (action: Action) => {},
});

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Counter 1: {count.firstCounter}</p>
      <p>Counter 2: {count.secondCounter}</p>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <ComponentA />
        <ComponentB />
      </CountContext.Provider>
    </div>
  );
}

export default App;

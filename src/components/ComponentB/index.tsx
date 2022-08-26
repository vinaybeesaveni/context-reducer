import { useContext } from "react";
import { CountContext } from "../../App";

export const ComponentB = () => {
  const countContext = useContext(CountContext);

  return (
    <div>
      <button
        onClick={() =>
          countContext.countDispatch({ type: "increment", value: 1 })
        }
      >
        Increment
      </button>
      <button
        onClick={() => countContext.countDispatch({ type: "reset", value: 1 })}
      >
        Reset
      </button>
      <button
        onClick={() =>
          countContext.countDispatch({ type: "decrement", value: 1 })
        }
      >
        Decrement
      </button>
      <button
        onClick={() =>
          countContext.countDispatch({ type: "increment2", value: 10 })
        }
      >
        Increment 2
      </button>
      <button
        onClick={() =>
          countContext.countDispatch({ type: "decrement2", value: 10 })
        }
      >
        Decrement 2
      </button>
    </div>
  );
};

import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, reset, decrement } = useCounter();

  const value = 3;

  return (
    <>
      <h1>Counter With Custom Hook: {counter} </h1>
      <button className="btn btn-primary" onClick={() => increment(value)}>
        +{value}
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrement(value)}>
        -{value}
      </button>
    </>
  );
};

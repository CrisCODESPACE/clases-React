import useCounter from "../hooks/useCounter";

const CounterComponent = () => {
  const { count, handleIncrement, handleDecrement, handleReset } = useCounter(
    10,
    5
  );

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
      <button onClick={handleReset}>Resetear</button>
    </div>
  );
};

export default CounterComponent;

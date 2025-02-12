import { useState } from "react";

function useCounter(initialValue = 0, step = 1) {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => setCount(count + step); // aumentar el valor del contador en el número de veces que se almacena en "step"
  const handleDecrement = () => setCount(count - step); // decrementa el valor del contador en el número de veces que almacena "step"
  const handleReset = () => setCount(initialValue); // reinicia el valor del contador al valor inicial pasado como argumento

  return { count, handleIncrement, handleDecrement, handleReset };
}

export default useCounter;

//IMPORTACIONES
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

// CREAMOS LA FUNCION QUE INCREMENTARA EL CONTADOR

const IncrementButtonComponent = () => {
  const { increment } = useContext(CounterContext);

  return <button onClick={increment}>incrementar contador</button>;
};

export default IncrementButtonComponent;

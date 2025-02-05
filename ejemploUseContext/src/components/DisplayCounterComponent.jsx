// IMPORTACIONES
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

//CREAR LA FUNCION QUE MUESTRA EL CONTADOR

const DisplayCounterComponent = () => {
  const { count } = useContext(CounterContext);

  return (
    <>
      <h2>El contador está en: {count}</h2>
    </>
  );
};

export default DisplayCounterComponent;

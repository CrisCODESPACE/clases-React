// HACEMOS LAS IMPORTACIONES NECESARIAS DESDE LAS DEPS DE REACT
import { createContext, useState } from "react";

// CREAMOS CONTEXTO
export const CounterContext = createContext();

// CREAMOS EL PROVEEDOR DE CONTEXTO
export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <>
      <CounterContext.Provider value={{ count, increment }}>
        {children}
      </CounterContext.Provider>
    </>
  );
}

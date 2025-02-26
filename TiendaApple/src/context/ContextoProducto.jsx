import { createContext, useState, useEffect } from "react";
import { getAllProducts } from "../../services";

//creamos contexto
export const ContextoProducto = createContext();

//creamos proveedor

export const ContextoProvider = ({ children }) => {
  const [todosProductos, setTodosProductos] = useState([]);

  useEffect(() => {
    setTodosProductos(getAllProducts());
  }, []);

  return (
    <ContextoProducto.Provider value={{ todosProductos }}>
      {children}
    </ContextoProducto.Provider>
  );
};

import { createContext, useState, useEffect } from "react";
import { getAllProducts } from "../../services";

//creamos contexto
export const ContextoProducto = createContext();

//creamos proveedor

export const ContextoProvider = ({ children }) => {
  const [todosProductos, setTodosProductos] = useState([]);
  const [productosCarrito, setProductosCarrito] = useState([]);

  useEffect(() => {
    setTodosProductos(getAllProducts());
  }, []);

  // función manejadora para añadir productos al carrito

  const addProduct = (producto) => {
    const existingProducts = productosCarrito.find(
      (item) => item.id === producto.id
    );

    if (existingProducts) {
      increaseProduct(producto);
    } else {
      return setProductosCarrito([...productosCarrito, producto]);
    }

    // setProductosCarrito([...productosCarrito, producto]);
  };

  /* Función para aumentar la cantidad de un producto en el carrito cuando la cantidad es 1*/

  const increaseProduct = (producto) => {
    const existingProducts = productosCarrito.find(
      (item) => item.id === producto.id
    );

    if (existingProducts) {
      setProductosCarrito(
        productosCarrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: (item.cantidad || 1) + 1 }
            : item
        )
      );
    }
  };

  // función manejadora para eliminar productos al carrito

  const deleteProduct = () => {};
  /* Función para disminuir la cantidad de un producto en el carrito y
 que lo elimine completamente al decrementar cuando la cantidad es 1*/

  const decreaseProduct = (producto) => {
    const existingProducts = productosCarrito.find(
      (item) => item.id === producto.id
    );

    if (existingProducts) {
      setProductosCarrito(
        productosCarrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: (item.cantidad || 1) - 1 }
            : item
        )
      );
    }
  };

  return (
    // renderizamos el componente

    <ContextoProducto.Provider
      value={{
        todosProductos,
        productosCarrito,
        addProduct,
        increaseProduct,
        decreaseProduct,
      }}
    >
      {children}
    </ContextoProducto.Provider>
  );
};

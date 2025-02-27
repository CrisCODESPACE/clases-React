import { createContext, useState, useEffect } from "react";
import { getAllProducts } from "../../services";

//creamos contexto
export const ContextoProducto = createContext();

//creamos proveedor

export const ContextoProvider = ({ children }) => {
  const [todosProductos, setTodosProductos] = useState([]);
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

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
      return setProductosCarrito([...productosCarrito, {...producto, cantidad: 1}]);
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

  const deleteProduct = (productoId) => {
    // usamos filter para crear un nuevo array excluyendo el productoid seleccionado
    setProductosCarrito(productosCarrito.filter(producto => producto.id !== productoId))

  };

  /* Función para disminuir la cantidad de un producto en el carrito y
 que lo elimine completamente al decrementar cuando la cantidad es 1*/

 const decreaseProduct = (producto) => {
 
  const existingProducts = productosCarrito.find((item) => item.id === producto.id);
 
  if (existingProducts) {
    if (producto.cantidad === 1){
      // al hacer click comprobamos si cantidad es 1, si es así, ejecutamos la función que borra el producto 
     deleteProduct(producto.id);
    }else{
     setProductosCarrito(productosCarrito.map((item) => item.id === producto.id ? {...item, cantidad: item.cantidad -1} : item)) 
    }
    
  }
 }
  return (
    // renderizamos el componente

    <ContextoProducto.Provider
      value={{
        todosProductos,
        productosCarrito,
        addProduct,
        increaseProduct,
        decreaseProduct,
        deleteProduct,
        productoSeleccionado,
        setProductoSeleccionado
      }}
    >
      {children}
    </ContextoProducto.Provider>
  );
};

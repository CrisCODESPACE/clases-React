import { useContext, useState, useEffect } from "react";
import { ContextoProducto } from "../context/ContextoProducto";

// consumimos el contexto

export const CarritoComponent = () => {
  const { productosCarrito, increaseProduct, decreaseProduct, deleteProduct } =
    useContext(ContextoProducto);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(productosCarrito.length > 0){
      sumarTotal();
    }
    return
  }, [productosCarrito]);

  function sumarTotal() {
    setTotal(
      productosCarrito.reduce(
        (acumulador, producto) => acumulador + producto.precio * producto.cantidad,
        0
      )
    );
  }

  return (
    // renderizamos el componente
    <div>
      <h2>Carrito</h2>
      {productosCarrito.length < 1 ? (
        <p>Carrito vacio</p>
      ) : (
        <div>
          <ul>
            {productosCarrito.map((producto) => (
              <li key={producto.id}>
                <p> {producto.nombre} </p>
                <p> {producto.precio}€ </p>
                <img src={producto.imagen} alt={producto.nombre} />
                {/* renderizar el aumento o disminución de cada item del carrito */}
                <div>
                  <button onClick={() => decreaseProduct(producto)}>-</button>
                  <p>Cantidad: {producto.cantidad}</p>
                  <button onClick={() => increaseProduct(producto)}>+</button>
                </div>
                <button onClick={() => deleteProduct(producto.id)}>
                  Eliminar producto del carrito
                </button>
              </li>
            ))}
          </ul>
          <p>Total {total} €</p>
        </div>
      )}
    </div>
  );
};

import { useContext, useState } from "react";
import { ContextoProducto } from "../context/ContextoProducto";

// consumimos el contexto

export const CarritoComponent = () => {
  const { productosCarrito, increaseProduct, decreaseProduct } =
    useContext(ContextoProducto);

  return (
    // renderizamos el componente
    <div>
      <h2>Carrito</h2>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

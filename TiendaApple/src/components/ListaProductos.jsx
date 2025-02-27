import { useContext, useState } from "react";
import { ContextoProducto } from "../context/ContextoProducto";
import { CarritoComponent } from "./CarritoComponent";

const ListaProductos = () => {
  const { todosProductos, addProduct, setProductoSeleccionado } = useContext(ContextoProducto);

  return (
    // renderizamos el componente
    <div>
      <h2>Catálogo</h2>
      <ul>
        {todosProductos.map((producto) => (
          <li key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} />
            <p>
              <strong>{producto.nombre}</strong>
            </p>
            <p>{producto.precio}€</p>
            <button onClick={()=> setProductoSeleccionado(producto)}>Ver detalles</button>
            <button onClick={() => addProduct(producto)}>
              Añadir al carrito
            </button>
          </li>
        ))}
      </ul>
      <CarritoComponent/>
    </div>
  );
};

export default ListaProductos;

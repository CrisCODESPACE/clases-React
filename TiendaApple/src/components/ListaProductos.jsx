import { useContext } from "react";
import { ContextoProducto } from "../context/ContextoProducto";

const ListaProductos = () => {
  const { todosProductos } = useContext(ContextoProducto);

  return (
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProductos;

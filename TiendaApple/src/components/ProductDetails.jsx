import { useContext } from "react"
import { ContextoProducto } from "../context/ContextoProducto"

export const ProductDetails = (producto) => {

    const {productoSeleccionado, setProductoSeleccionado} = useContext(ContextoProducto);

  return (
    <div>
        <h2>{productoSeleccionado.nombre}</h2>
        <p>{productoSeleccionado.descripcion}</p>
        <p>{productoSeleccionado.caracteristicas.join(", ")}</p>
        <p>{productoSeleccionado.coloresDisponibles.join(", ")}</p>
        <button onClick={()=>setProductoSeleccionado(null)}>Volver a lista</button>
        </div>
  )
}

